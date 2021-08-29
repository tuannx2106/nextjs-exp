/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import Layout from 'components/Layout'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import React, { ReactElement } from 'react'
import { Show } from 'types/show'
import { NextSeo } from 'next-seo'

const DetailPage = ({ show }: InferGetStaticPropsType<GetStaticProps<GetStaticPropsReturn>>) => {
  const { image, summary, name } = show

  return (
    <div style={{ padding: 24 }}>
      <NextSeo
        title={name}
        description={`This is a detail page of ${name}`}
        openGraph={{
          title: name,
          description: `This is a detail page of ${name}`,
          images: [
            {
              url: image.medium,
              width: 800,
              height: 600,
              alt: 'Description for OG image 1',
            },
          ],
        }}
      />

      <h1> This is {name}</h1>
      <Image
        src={image.medium}
        alt={name}
        width={300}
        height={500}
      />
      {/* eslint-disable-next-line react/no-danger */}
      <p dangerouslySetInnerHTML={{
        __html: summary,
      }}
      />
      <ul>
        <li>
          <Link href="/listing">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/listing/2">
            <a>2</a>
          </Link>
        </li>
        <li>
          <Link href="/listing/3">
            <a>3</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

DetailPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

interface GetStaticPropsReturn {
  show: Show;
}

export const getStaticProps: GetStaticProps<GetStaticPropsReturn> = async ({ params }) => {
  try {
    if (!params) throw new Error('No params')
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${params.id}`)

    return {
      props: {
        show: data,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data } = await axios.get('https://api.tvmaze.com/search/shows?q=batman')

    return {
      paths: data.map((show: {score: number, show: Show}) => `/listing/${show.show.id}`),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export default DetailPage
