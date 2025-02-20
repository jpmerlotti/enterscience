import { Button } from '@/components/button'
import DateTimePicker from '@/components/datetime-picker'
import { Dialog, DialogActions, DialogBody, DialogTitle } from '@/components/dialog'
import { Field, FieldGroup, Fieldset, Label, Legend } from '@/components/fieldset'
import { Input } from '@/components/input'
import Notification from '@/components/notification'
import { Text } from '@/components/text'
import axios from 'axios'
import { useState, useEffect } from 'react'

export function CreateForm({ artist, open, onClose }) {
    // Manage form state
    let [isOpen, setIsOpen] = [open, onClose];
    let [name, setName] = useState("");
    let [dataArtist, setDataArtist] = useState("");
    let [cache, setCache] = useState(0);
    let [address, setAddress] = useState("");
    let [startDate, setStartDate] = useState("");
    
    // State to control success notification
    let [success, setSuccess] = useState(false);

    useEffect(() => {
        if (artist?.name) {
            setDataArtist(artist.name);
        }
    }, [artist]);

    const handleCreation = async () => {
        // Ensure all required fields are correctly formatted
        const formattedName = typeof name === 'string' ? name.trim() : "";
        const formattedArtist = typeof dataArtist === 'string' ? dataArtist.trim() : "";
        const formattedAddress = typeof address === 'string' ? address.trim() : "";
        const formattedDate = startDate ? String(startDate).trim() : "";
    
        // Validate required fields
        if (!formattedName || !formattedArtist || !formattedDate) {
            alert("Please fill in all required fields.");
            return;
        }
    
        const data = {
            name: formattedName,
            artist: formattedArtist,
            cache: cache || 0,
            address: formattedAddress,
            start_date: formattedDate,
        };
    
        try {
            await axios.post("http://localhost:8000/v1/events/store", data);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 4000); // Hide success message after 4s
            onClose(false); // Close the modal after successful submission
        } catch (error) {
            console.error("Error creating event:", error);
        }
    };

    return (
        <>
        {success && (
            <Notification message="Event successfully created" type="success" />
        )}
        <Dialog size="xl" open={isOpen} onClose={setIsOpen}>
            <DialogTitle>Create Event</DialogTitle>
            <DialogBody>
                <form action="http://localhost:8000/v1/events/store" method="POST">
                    <Fieldset>
                        <Legend>Event Details</Legend>
                        <Text>Ensure all required fields are filled.</Text>
                        <FieldGroup>
                            <Field>
                                <Label>Name<span className="text-red-500">*</span></Label>
                                <Input name="name" onBlur={(e) => setName(e.target.value)} />
                            </Field>
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
                                <Field>
                                    <Label>Cache</Label>
                                    <Input name="cache" type="number" onBlur={(e) => setCache(Number(e.target.value))} />
                                </Field>
                                <Field>
                                    <Label>Artist<span className="text-red-500">*</span></Label>
                                    <Input name="artist" readOnly value={artist.name} />
                                </Field>
                            </div>
                            <Field>
                                <Label>Address</Label>
                                <Input name="address" onBlur={(e) => setAddress(e.target.value)} />
                            </Field>
                            <Field>
                                <Label>Date<span className="text-red-500">*</span></Label>
                                <DateTimePicker name="startDate" onChange={setStartDate} />
                            </Field>
                        </FieldGroup>
                    </Fieldset>
                </form>
            </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsOpen(false)}>
                    Cancel
                </Button>
                <Button 
                    className="!bg-green-500"
                    onClick={handleCreation}>
                    Create Event
                </Button>
            </DialogActions>
        </Dialog>
        </>
    );
}
