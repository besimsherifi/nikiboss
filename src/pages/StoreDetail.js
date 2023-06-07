import {React, useRef, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import storen from '../utils/storen'

function StoreDetail() {
  const topContainer = useRef();

useEffect(() => {
  topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
  }, []);
  const { storeId } = useParams();
  const {t, i18n } = useTranslation()

  const store = storen.find(item => item.id === storeId);
  const description = i18n.language === 'de' ? store.description_de : i18n.language === 'it' ? store.description_it : store.description_en
  const title = i18n.language === 'de' ? store.title_de : i18n.language === 'it' ? store.title_it : store.title_en

  if (!store) {
    return <div>Store not found</div>;
  }

  return (
    <>
      <div ref={topContainer} className='grid lg:grid-cols-2 my-12'>
        <img className='p-10 self-center' src={store.image} alt={store.title_de} />
        <div className='p-10 border-l-2'>
          <h1 className='text-2xl md:text-5xl my-5'>{title}</h1>
          <p className='text-[14px] md:text-[16px]'>{description}</p>
          <Link to='/offer'><button className='bg-custom-orange rounded-lg p-3 my-10 text-white md:float-right'>{t("OFFER.HEADER")}</button></Link>
        </div>
      </div>
    </>
  );
}

export default StoreDetail