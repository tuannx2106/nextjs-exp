/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Popconfirm, Table, Upload } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useState } from 'react';
import Link from 'next/link';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import s from './HomePage.module.scss';
import { Post, RecordType, StaticPropsType } from './types';

export const readFile = (file: File) => new Promise((resolve) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => resolve(reader.result), false)
  reader.readAsText(file)
})

const HomePage = ({ text, posts }: InferGetStaticPropsType<GetStaticProps<StaticPropsType>>) => {
  const [records, setRecords] = useState<RecordType[]>([])

  const columns: ColumnsType<RecordType> = [
    {
      dataIndex: 'phone',
      title: 'Phone',
      render: (phone) => <a href={`tel:${phone}`}>{phone}</a>,
    },
    {
      dataIndex: 'address',
      title: 'Address',
    },
    {
      dataIndex: 'project',
      title: 'Project',
    },
    {
      dataIndex: 'phone',
      title: 'Action',
      render: (phone) => (
        <Popconfirm
          title="Are you sure delete this record?"
          onConfirm={() => {
            setRecords(records.filter((record) => record.phone !== phone))
          }}
        >
          <Button>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ]

  return (
    <div className={s.root}>
      <NextSeo
        title="Home page title"
        description="A short description goes here."
      />

      <Link href="/listing">
        <a>To listing page {posts[0].author}</a>
      </Link>
      <Upload
        showUploadList={false}
      >
        <Button type="primary">{text}</Button>
      </Upload>
      <Table<RecordType>
        columns={columns}
        dataSource={records}
        pagination={false}
        size="small"
        bordered
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps<StaticPropsType> = async () => {
  const posts: Post[] = [
    {
      author: 'Sergio',
      content: 'Hello world!',
    },
  ]
  return {
    props: {
      text: 'homepage',
      posts,
    },
  }
}

export default HomePage;
