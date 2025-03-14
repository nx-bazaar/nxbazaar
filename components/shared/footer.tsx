'use client'
import { ChevronUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
//import useSettingStore from '@/hooks/use-setting-store'

import {Select, SelectContent,  SelectTrigger} from '../ui/select'
import { SelectValue } from '@radix-ui/react-select'
import { useLocale, useTranslations } from 'next-intl'
//import { usePathname, useRouter } from '@/i18n/routing'
//import { i18n } from '@/i18n-config'

export default function Footer() {
 

  const locale = useLocale()
  const t = useTranslations()
  return (
    <footer className='bg-black  text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full  rounded-none '
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          {t('Footer.Back to top')}
        </Button>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto'>
          <div>
            <h3 className='font-bold mb-2'>{t('Footer.Get to Know Us')}</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/page/careers'>{t('Footer.Careers')}</Link>
              </li>
              <li>
                <Link href='/page/blog'>{t('Footer.Blog')}</Link>
              </li>
              <li>
                <Link href='/page/about-us'>
                  
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-2'>{t('Footer.Make Money with Us')}</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/page/sell'>
               
                </Link>
              </li>
              <li>
                <Link href='/page/become-affiliate'>
                
                </Link>
              </li>
              <li>
                <Link href='/page/advertise'>
                 
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-2'>{t('Footer.Let Us Help You')}</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/page/shipping'>
                  {t('Footer.Shipping Rates & Policies')}
                </Link>
              </li>
              <li>
                <Link href='/page/returns-policy'>
                  {t('Footer.Returns & Replacements')}
                </Link>
              </li>
              <li>
                <Link href='/page/help'>{t('Footer.Help')}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-800'>
          <div className='max-w-7xl mx-auto py-8 px-4 flex flex-col items-center space-y-4'>
            <div className='flex items-center space-x-4 flex-wrap md:flex-nowrap'>
              <Image
                src='/icons/logo.svg'
                alt={` logo`}
                width={48}
                height={48}
                className='w-14'
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />{' '}
              <Select
                value={locale}
               
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('Footer.Select a language')} />
                </SelectTrigger>
                <SelectContent>
                 
                
                </SelectContent>
              </Select>
              <Select
               
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('Footer.Select a currency')} />
                </SelectTrigger>
                
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex justify-center  gap-3 text-sm'>
          <Link href='/page/conditions-of-use'>
            {t('Footer.Conditions of Use')}
          </Link>
          <Link href='/page/privacy-policy'>{t('Footer.Privacy Notice')}</Link>
          <Link href='/page/help'>{t('Footer.Help')}</Link>
        </div>
        
      </div>
    </footer>
  )
}
