import { Button, Popconfirm, Table, Upload } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useState } from 'react';
import { parse } from 'papaparse';
import s from './HomePage.module.scss';
import { RecordType } from './types';

export const readFile = (file: File) => new Promise((resolve) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => resolve(reader.result), false)
  reader.readAsText(file)
})

const HomePage = () => {
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

  const customRequestUpload = async ({ file }: {file: File}) => {
    const _file = await readFile(file)
    const { data } = parse<RecordType>(_file as File, { header: true })
    setRecords(data)
  }

  return (
    <div className={s.root}>
      <Upload
        // @ts-ignore
        customRequest={customRequestUpload}
        showUploadList={false}
      >
        <Button type="primary">Upload</Button>
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

export default HomePage;
