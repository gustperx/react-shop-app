import { FC, useState } from "react";
import { usePortfolio } from "../../hooks";
import { PortfolioAttributes, PortfolioItem } from "../../models";
import { Header, Modal } from "../ui";
import { Form } from "./";

interface Props {
  portfolios: PortfolioItem[];
}

export const TableList: FC<Props> = ({ portfolios }) => {
  const {
    createPortfolio,
    updatePortfolio,
    deletePortfolio,
    getPortfolioById,
  } = usePortfolio();

  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [currentId, setCurrentId] = useState<string>();
  const [seletedPortfolio, setSeletedPortfolio] =
    useState<PortfolioAttributes>();

  const handleModalUpdate = async (id: string) => {
    resetParams();
    const language = await getPortfolioById(id);
    setCurrentId(id);
    setSeletedPortfolio(language);
    setOpenModalUpdate(!openModalUpdate);
  };

  const handleModalCreate = () => {
    resetParams();
    setOpenModalCreate(!openModalCreate);
  };

  const resetParams = () => {
    setCurrentId("");
    setSeletedPortfolio({
      title: "",
      description: "",
      slug: "",
      visible: false,
      highlight: false,
      languages: [],
    });
  };

  const handleEdit = async (data: PortfolioAttributes) => {
    if (!currentId) return;
    await updatePortfolio(currentId, data);
  };

  return (
    <>
      <div className="mb-4">
        <Header
          title="Portfolios"
          textAction="Crear nuevo"
          handleAction={handleModalCreate}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>visible</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {portfolios.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.visible ? "Si" : "No"}</td>
                  <td>
                    <button
                      className="btn btn-ghost"
                      onClick={() => handleModalUpdate(item.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-ghost"
                      onClick={() => deletePortfolio(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal openModal={openModalUpdate} handleModal={setOpenModalUpdate}>
        <Form
          handleForm={handleEdit}
          formValues={seletedPortfolio}
          handleModal={setOpenModalUpdate}
        />
      </Modal>

      <Modal openModal={openModalCreate} handleModal={setOpenModalCreate}>
        <Form
          handleForm={createPortfolio}
          formValues={seletedPortfolio}
          handleModal={setOpenModalCreate}
        />
      </Modal>
    </>
  );
};
