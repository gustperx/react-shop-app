import { FC, useState } from "react";
import { useProduct } from "../../hooks";
import { ProductAttributes, ProductItem } from "../../models";
import { Header, Modal } from "../ui";
import { Form } from ".";

interface Props {
  products: ProductItem[];
}

export const TableList: FC<Props> = ({ products }) => {
  const {
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
  } = useProduct();

  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [currentId, setCurrentId] = useState<string>();
  const [seletedPortfolio, setSeletedProduct] =
    useState<ProductAttributes>();

  const handleModalUpdate = async (id: string) => {
    resetParams();
    const language = await getProductById(id);
    setCurrentId(id);
    setSeletedProduct(language);
    setOpenModalUpdate(!openModalUpdate);
  };

  const handleModalCreate = () => {
    resetParams();
    setOpenModalCreate(!openModalCreate);
  };

  const resetParams = () => {
    setCurrentId("");
    setSeletedProduct({
      title: "",
      description: "",
      slug: "",
      visible: false,
      highlight: false,
      languages: [],
    });
  };

  const handleEdit = async (data: ProductAttributes) => {
    if (!currentId) return;
    await updateProduct(currentId, data);
  };

  return (
    <>
      <div className="mb-4">
        <Header
          title="Products"
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
            {products.map((item) => {
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
                      onClick={() => deleteProduct(item.id)}
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
          handleForm={createProduct}
          formValues={seletedPortfolio}
          handleModal={setOpenModalCreate}
        />
      </Modal>
    </>
  );
};
