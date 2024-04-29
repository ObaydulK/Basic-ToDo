import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select" 
import { Label } from "@/components/ui/label"
import { Textarea } from '../../components/ui/textarea'

export function Todo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Todo</DialogTitle>
                    <DialogDescription>
                        Make changes to your Add ToDo here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="  items-center gap-4">
                        <Label htmlFor="todo" className="text-right">
                            Todo
                        </Label>
                        <Textarea
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className=" items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Priority
                        </Label>
                        <Select>
                            <SelectTrigger  >
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Priority</SelectLabel>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="Medium">Medium</SelectItem>
                                    <SelectItem value="Low">Low</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
