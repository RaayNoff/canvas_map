import { FC } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import s from "./sidebar.module.scss";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

type FormValues = {
  title: string;
  description: string;
};

const Sidebar: FC = () => {
  const { selectedAddress, response, isOpened } = useTypedSelector(
    (state) => state.sidebar
  );
  const { newSelectedMark } = useTypedSelector((state) => state.map);
  const { setSidebarOpened, setAddress, setNewSelectedMark, addNewMark } =
    useActions();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      description: "Description 1",
      title: "Title 1",
    },
  });

  const handleSub: SubmitHandler<FormValues> = (data) => {
    addNewMark({
      x: newSelectedMark?.x || 0,
      y: newSelectedMark?.y || 0,
      address: selectedAddress,
      descrition: data.description,
      title: data.title,
    });

    reset();
    setAddress("");
    setSidebarOpened(false);
    setNewSelectedMark(null);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    setSidebarOpened(false);
    setAddress("");
    reset();
  };

  return (
    <aside className={isOpened ? `${s.sidebar} ${s.opened}` : `${s.sidebar}`}>
      <form
        action=""
        className={s.sidebar__form}
        onSubmit={handleSubmit(handleSub)}
      >
        <h1 className={s.sidebar__title}>Выберите адрес на карте</h1>
        <h2 className={s.sidebar__subtitle}>Адрес: {selectedAddress}</h2>
        <select
          {...register("title", { required: true })}
          className={s.sidebar__select}
        >
          {response?.reference.titles.map((t, i) => (
            <option key={i} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
        <select
          {...register("description", { required: true })}
          className={s.sidebar__select}
        >
          {response?.reference.descriptions.map((d) => (
            <option key={d.id} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>
        <section className={s.sidebar__controls}>
          <button
            className={s.sidebar__btn}
            disabled={selectedAddress.length === 0 || !isValid}
          >
            Добавить
          </button>
          <button
            className={s.sidebar__btn}
            onClick={(e) => {
              handleClose(e);
            }}
          >
            Закрыть
          </button>
        </section>
      </form>
    </aside>
  );
};

export default Sidebar;
