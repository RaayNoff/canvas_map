import { FC } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import s from "./sidebar.module.scss";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import marksService from "../../../services/marksService";

type FormValues = {
  address: string;
  title: string;
  description: string;
};

const Sidebar: FC = () => {
  const { selectedAddress } = useTypedSelector((state) => state.sidebar);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: "onChange",
  });
  const { setSidebarOpened } = useActions();

  const { response, isOpened } = useTypedSelector((state) => state.sidebar);

  const handleSub: SubmitHandler<FormValues> = (data) => {
    marksService.setMark(selectedAddress, data.title, data.description);
    reset();
    setSidebarOpened(false);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    setSidebarOpened(false);
  };

  return (
    <aside className={isOpened ? `${s.sidebar} ${s.opened}` : `${s.sidebar}`}>
      <form
        action=""
        className={s.sidebar__form}
        onSubmit={handleSubmit(handleSub)}
      >
        <h1 className={s.sidebar__title}>Выберите адресс на карте</h1>
        <h2 className={s.sidebar__subtitle}>Адресс: {selectedAddress}</h2>
        <select
          {...(register("title"), { required: true })}
          className={s.sidebar__select}
        >
          {response?.reference.titles.map((t, i) => (
            <option key={i}>{t.name}</option>
          ))}
        </select>
        <select
          {...(register("description"), { required: true })}
          className={s.sidebar__select}
        >
          {response?.reference.descriptions.map((d) => (
            <option key={d.id}>{d.name}</option>
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
