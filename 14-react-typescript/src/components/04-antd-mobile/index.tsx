import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Swiper } from 'antd-mobile'
import './index.css'
export default function Index() {
  const [item, setItem] = useState<Array<any>>([])

  useEffect(() => {
    axios
      .get(
        'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1732895',
        {
          headers: {
            'X-Client-Info':
              '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16935369813115135484821505", "bc": "110100" }',
            'X-Host': 'mall.film-ticket.film.list',
          },
        }
      )
      .then((res: any) => {
        console.log('res:', res)
        setItem(res.data.data.films as Array<any>)
      })
      .catch((err: any) => {
        console.log('err:', err)
      })
  }, [])

  return (
    <div>
      <Swiper autoplay autoplayInterval={1000}>
        {item.map((items) => {
          return (
            <Swiper.Item key={items.filmId}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${items.poster})`,
                  backgroundSize: '100% 100%',
                }}
              ></div>
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
