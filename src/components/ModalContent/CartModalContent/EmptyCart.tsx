import shoppingBag from '../../../images/OptionsContentImages/EmptyCart.svg'
import cl from './Cart.module.css'

const EmptyCart = () => {
  return (
    <div className={cl.empty__modal__content}>
        <div className={cl.empty__modal_description}>
            <img width={81} height={98} src={shoppingBag} alt="" />
            <div className={cl.empty__modal_title}>
                <span>В вашей корзине пока пусто</span>
                <span>Тут появятся товары, которые <br /> вы закажите</span>
            </div>
        </div>
        <div className={cl.empty__modal_options}>
            <button>Повторить прошлый заказ</button>
            <button>История заказов</button>
        </div>
    </div>
  )
}

export default EmptyCart
