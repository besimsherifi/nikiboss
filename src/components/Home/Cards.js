import React from 'react'
import Card from './Card'
import { useTranslation } from 'react-i18next'
import { UilCommentInfoAlt } from '@iconscout/react-unicons'
import { UilWrench } from '@iconscout/react-unicons'
import { UilRuler } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'

function Cards() {

  const { t } = useTranslation();

  return (
    <>
        <section>
        <div className='grid md:grid-cols-1 text-center gap-10 p-14 md:p-20'>
          {/* <h1 className='text-black text-3xl sm:text-5xl max-w-md font-semibold' data-aos="fade-right">{t('CARDS.HEADER')}</h1> */}
          <p className='text-black text-2xl font-medium' data-aos="fade-left">
           {t('CARDS.DESCRIPTION')}
          </p>
        </div>
      </section>
      <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-10'>
        <Card icon={<UilCommentInfoAlt size="65" color="#229BCE"  />} title={t('CARDS.CARD_1_TITLE')} description={t('CARDS.CARD_1_DESCRIPTION')} animation='fade-right' />
        <Card icon={<UilRuler size="65" color="#229BCE" />} title={t('CARDS.CARD_2_TITLE')} description={t('CARDS.CARD_2_DESCRIPTION')} animation='fade-up' />
        <Card icon={<UilSetting size="65" color="#229BCE" />} title={t('CARDS.CARD_3_TITLE')} description={t('CARDS.CARD_3_DESCRIPTION')} animation='fade-up' />
        <Card icon={<UilWrench size="65" color="#229BCE" />} title={t('CARDS.CARD_4_TITLE')} description={t('CARDS.CARD_4_DESCRIPTION')} animation='fade-left' />
      </section>
    </>
  )
}

export default Cards