import { FC, useState } from "react";
import { useCategory } from "../../hooks";
import { CategoryAttributes, CategoryItem } from "../../models";
import { Header, Modal } from "../ui";
import { Form } from ".";

interface Props {
  categories: CategoryItem[];
}

export const TableList: FC<Props> = ({ categories }) => {
  const { createCategory, updateCategory, deleteCategory, getCategoryById } =
    useCategory();

  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [currentId, setCurrentId] = useState<string>();
  const [seletedLanguage, setSeletedCategory] = useState<CategoryAttributes>();

  const handleModalUpdate = async (id: string) => {
    resetParams();
    const language = await getCategoryById(id);
    setCurrentId(id);
    setSeletedCategory(language);
    setOpenModalUpdate(!openModalUpdate);
  };

  const handleModalCreate = () => {
    resetParams();
    setOpenModalCreate(!openModalCreate);
  };

  const resetParams = () => {
    setCurrentId("");
    setSeletedCategory({ name: "" });
  };

  const handleEdit = async (data: CategoryAttributes) => {
    if (!currentId) return;
    await updateCategory(currentId, data);
  };

  return (
    <>
      <div className="mb-4">
        <Header
          title="Categories"
          textAction="Crear nuevo"
          handleAction={handleModalCreate}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost"
                      onClick={() => handleModalUpdate(item.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-ghost"
                      onClick={() => deleteCategory(item.id)}
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
          formValues={seletedLanguage}
          handleModal={setOpenModalUpdate}
        />
      </Modal>

      <Modal openModal={openModalCreate} handleModal={setOpenModalCreate}>
        <Form
          handleForm={createCategory}
          formValues={seletedLanguage}
          handleModal={setOpenModalCreate}
        />
      </Modal>
    </>
  );
};
