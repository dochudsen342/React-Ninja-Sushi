import cl from './AppStoreBtn.module.css'

const MyAppStoreButton = () => {
  return (
    <div className={cl.app__link}>
        <button className={cl.app__appStore}><span>App Store</span></button>
        <button className={cl.app__googlePlay}><span>Google Play</span></button>
     </div>
  )
}

export default MyAppStoreButton
