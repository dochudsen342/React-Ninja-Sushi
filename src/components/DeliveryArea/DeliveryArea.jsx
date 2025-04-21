import cl from './deliveryArea.module.css'
const DeliveryArea = () => {
  return (
    <div className={cl.deleveryArea__container}>
        <p className={cl.deleveryArea__title}>Зона доставки Ninja Sushi</p>
        <div className={cl.google__map_container}>
            <iframe className={cl.google__map} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d168536.38435174184!2d44.48502419462892!3d48.69819819974451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1741101842688!5m2!1sru!2sru" aria-hidden='true' allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default DeliveryArea
