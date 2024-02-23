import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from "@nextui-org/react";

const Links = () => {
  const [links, setLinks] = useState([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/overview/Links'); // Replace '/api/importantlinks/' with your actual Django API endpoint
        const data = await response.json();
        setLinks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const pages = Math.ceil(links.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return links.slice(start, end);
  }, [page, links]);

  return (
    <>
      <div className='ml-4 md:ml-12 mb-4 md:mb-10'>
        <h1 className='text-2xl md:text-5xl font-semibold leading-tight text-[#173e26]'>
          Important Links
        </h1>
      </div>
      <Table
        className='h-[100vh] max-lg:ml-0 ml-10'
        isStriped
        aria-label="Example static collection table"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="sucess"
              variant='light'
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
              classNames={{
                cursor: " text-blue",
              }}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          <TableColumn key="Organization_name" className=' font-extrabold text-[#173e26] text-lg'>Organization Name</TableColumn>
          <TableColumn key="Description" className=' font-extrabold text-[#173e26] text-lg'>Description</TableColumn>
          <TableColumn key="link" className=' font-extrabold text-[#173e26] text-lg'>Link</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.Organization_name}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "link" ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  ) : (
                    item[columnKey]
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default Links;
