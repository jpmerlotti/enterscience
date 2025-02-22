"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { useEffect, useState } from 'react';
import { Heading } from '@/components/heading';
import axios from 'axios';
import {
    Pagination,
    PaginationNext,
    PaginationPrevious,
} from '@/components/pagination'
import {Text} from "@/components/text";
import {Button} from "@/components/button";

export default function Events() {
  const [events, setEvents] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(0);
const [perPage, setPerPage] = useState(10);
const [totalEvents, setTotalEvents] = useState(0);
const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchEvents = async (page = 1) => {
      setLoading(true);
      try {
          const response = await axios.get("http://127.0.0.1:8000/v1/events", {
              params: {
                  page,
                  perPage,
              },
          });
          const { data, pagination } = response.data;
          setEvents(data);
          setCurrentPage(pagination.current_page);
          setTotalPages(pagination.last_page);
          setPerPage(pagination.per_page);
          setTotalEvents(pagination.total);
          setEvents(response.data.data);
          setLoading(false);
      } catch (error) {
          console.error("Error when searching for events:", error);
          setError(true);
          setLoading(false);
      }
  };

  useEffect(() => {
      fetchEvents(currentPage);
  }, []);

  const handlePageChange = (page: number) => {
      if (page < 1 || page > totalPages) {
          return; // Prevent invalid page numbers
      }
      // Call fetchEvents with the new page
      fetchEvents(page);
  };

    if (loading) {
      return <div className="mt-5 text-center">Loading...</div>;
  }

  if (error) {
      return <div className="mt-5 text-center alert alert-danger">Something goes wrong while loading events :( </div>;
  }

  return (
    <main>
        <header className="flex flex-row justify-start">
            <Heading>Events</Heading>
        </header>
        <Table striped >
          <TableHead>
            <TableRow className="grid grid-cols-5 gap-4">
              <TableHeader className="col-span-1">Name</TableHeader>
              <TableHeader className="col-span-1">Artist</TableHeader>
              <TableHeader className="col-span-1 text-center">Cache</TableHeader>
              <TableHeader className="col-span-1">Date</TableHeader>
              <TableHeader className="col-span-1">Address</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id} className="grid grid-cols-5 gap-4">
                <TableCell className="col-span-1 font-medium truncate">{event.name}</TableCell>
                <TableCell className="col-span-1 font-medium truncate">{event.artist}</TableCell>
                <TableCell className="col-span-1 text-center text-zinc-500">R$ {Number(event.cache / 100)}</TableCell>
                <TableCell className="col-span-1 font-medium truncate">{event.start_date}</TableCell>
                <TableCell className="col-span-1 font-medium truncate">{event.address}</TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
        <Pagination className="flex items-center mt-6">
            <Text className="mr-5">Showing {perPage} from {totalEvents} Events</Text>
            <Button
                outline
                disabled={currentPage === 1}
                onClick={() => {
                handlePageChange(currentPage - 1)
            }}>⟵ Previous</Button>
            <Button outline
                disabled={currentPage === totalPages}
                onClick={() => {
                handlePageChange(currentPage + 1)
            }}>Next ⟶</Button>
        </Pagination>
      </main>
    )
  }