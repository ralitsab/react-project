
import style from './loader.module.css';
const Loader = () => (
  <div className={`${style.can_loader_container} bg-pageGreen`}>
  <img src="../public/loader/loader.svg" alt="Loading..." className={style.can_loader} />
</div>
);

export default Loader;
