/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Layout from 'components/Layout'
import Image from 'next/image';
import React, { ReactElement } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import { GetStaticPropsReturn } from './types';

const ListingPage = ({ shows }: InferGetStaticPropsType<GetStaticProps<GetStaticPropsReturn>>) => (
  <div style={{ padding: 24 }}>
    <NextSeo
      title="Listing page"
      description="A short description goes here."
      openGraph={{
        title: 'Listing page',
        description: 'A short description goes here.',
        images: [
          {
            url: shows ? shows[0].image.medium : '/favicon.ico',
            width: 800,
            height: 600,
            alt: 'Description for OG image 1',
          },
        ],
      }}
    />

    <ul>
      {shows && shows.map((show) => (
        <li key={show.id}>
          <div>
            <Image
              src={show.image.medium}
              alt={show.name}
              width={100}
              height={100}
            />
            <Link href="/listing/[id]" as={`/listing/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

ListingPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<GetStaticPropsReturn> = async () => {
  try {
    const { data } = await axios.get('https://api.tvmaze.com/search/shows?q=batman')

    return {
      props: {
        // @ts-ignore
        shows: data.map((entry) => entry.show),
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default ListingPage
