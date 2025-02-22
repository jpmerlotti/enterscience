"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { useEffect, useState } from 'react';
import { Heading } from '@/components/heading';
import axios from 'axios';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchEvents = async () => {
      try {
          const response = await axios.get("http://127.0.0.1:8000/v1/events");
          setEvents(response.data.data);
          setLoading(false);
      } catch (error) {
          console.error("Error when searching for events:", error);
          setError(true);
          setLoading(false);
      }
  };

  useEffect(() => {
      fetchEvents();
  }, []);

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
                <TableCell className="col-span-1 text-center text-zinc-500">R$ {event.cache}</TableCell>
                <TableCell className="col-span-1 font-medium truncate">{event.start_date}</TableCell>
                <TableCell className="col-span-1 font-medium truncate">{event.address}</TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </main>
    )
  }