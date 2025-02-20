'use client';

import { InputGroup, Input } from "@/components/input";
import { Field, Label, Description } from "@/components/fieldset";
import { Text } from "@/components/text";
import { CreateForm } from "@/app/events/event-form";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/button";
import { use, useEffect, useState } from "react";
import { Avatar } from "./avatar";
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog';

const config: JSON = require('../../config.json');
const CLIENT_ID: string = config.client.id;
const CLIENT_SECRET: string = config.client.secret;

export function Search() {
    const [ query, setQuery ] = useState("");
    const [ artists, setArtists ] = useState([]);  
    const [ token, setToken ] = useState("");

    let [isOpen, setIsOpen] = useState(false);
    let [artist, setArtist] = useState("");

    useEffect(() => {
        const fetchToken = async () => {
          const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
          });
          const data = await response.json();
          setToken(data.access_token);
        };
        fetchToken();
      }, []);

      const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value) {
          const response = await fetch(`https://api.spotify.com/v1/search?q=${value}&type=artist&limit=5`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          setArtists(data.artists?.items || []);
        } else {
          setArtists([]);
        }
      };

    return (
        <div>
            <Field>
                <Label>Search for Artist</Label>
                <InputGroup>
                    <Input 
                        type="text" 
                        name="search"
                        onChange={handleSearch}
                        placeholder="Search for&hellip;"
                        />
                    <MagnifyingGlassIcon/>
                </InputGroup>
                <Description>Type here to search for your next event's artist</Description>
            </Field>
            {artists.length > 0 && (
                <ul className="flex flex-col gap-3 p-6 border border-gray-500 rounded-md">
                    {artists.map((artist) => (
                        <li key={artist.id} className="grid grid-cols-5">
                            <Avatar src={artist.images[0]?.url} alt={artist.name} className="w-10 h-10 col-span-1 rounded-circle" />
                            <Text className="col-span-1">{artist.name}</Text>
                            <Text className="col-span-1">{artist.genres[0]}</Text>
                            <Text className="col-span-1">{artist.popularity}</Text>
                            <Button 
                                className=" col-span-1 !bg-green-500 text-dark" 
                                onClick={() => {
                                    setIsOpen(true);
                                    setArtist(artist);
                            }}>Selecionar</Button>
                        </li>
                    ))}
                </ul>
            )}
            <CreateForm artist={artist} open={isOpen} onClose={setIsOpen} />
        </div>
  );
}