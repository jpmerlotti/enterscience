import { Button } from '@/components/button'
import DateTimePicker from '@/components/datetime-picker'
import { Dialog, DialogActions, DialogBody, DialogTitle } from '@/components/dialog'
import { Field, FieldGroup, Fieldset, Label, Legend } from '@/components/fieldset'
import { Input } from '@/components/input'
import { Text } from '@/components/text'
import { useState } from 'react'

export function CreateForm({
    artist, open, onClose}) {

    let [isOpen, setIsOpen] = useState(false);

    setIsOpen(open);

    return (
        <Dialog size="xl" open={isOpen} onClose={setIsOpen}>
            <DialogTitle>Create Event</DialogTitle>
            <DialogBody>
                <form action="http://localhost:8000/v1/events/store" method="POST">
                <Fieldset>
                    <Legend>Shipping details</Legend>
                    <Text>Without this your odds of getting your order are low.</Text>
                    <FieldGroup>
                        <Field>
                            <Label>Name<span className='text-red-500'>*</span></Label>
                            <Input name="name"></Input>
                        </Field>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
                        <Field>
                        <Label>Cache</Label>
                        <Input name="cache" />
                        </Field>
                        <Field>
                        <Label>Artist<span className='text-red-500'>*</span></Label>
                        <Input 
                            name="artist"
                            readOnly
                            value={artist.name} />
                        </Field>
                    </div>
                    <Field>
                        <Label>Address</Label>
                        <Input name="address" />
                    </Field>
                    <Field>
                        <Label>Date<span className='text-red-500'>*</span></Label>
                        <DateTimePicker/>
                    </Field>
                    </FieldGroup>
                </Fieldset>
                </form>
            </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsOpen}>
                Cancel
                </Button>
                <Button 
                    className="!bg-green-500"
                    onClick={() => setIsOpen}>Create Event</Button>
            </DialogActions>
        </Dialog>
      )
}