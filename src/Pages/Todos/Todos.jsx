import { SearchIcon } from "lucide-react";
import Container from "../../components/ui/Container";
import { Button } from "../../components/ui/button"
import { Checkbox } from "../../components/ui/checkbox"
import { useEffect, useState } from "react";
import { Todo } from "../../components/Todo/Todo";


const Todos = () => {

    const [todos, setTodos] = useState([]);


    const fetchTodo = async () => {
        try {
            const res = await fetch("http://localhost:5000/todos");
            const todos = res.json();
            console.log(todos);
        }catch(err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchTodo();
    }, [])

    return (
        <div>
            <Container>
                <div className="flex items-center justify-between border-b-4">
                    <div className="flex  gap-2 ">
                        <input type="search" className="text-black" name="Serch" placeholder="Search" id="" />
                        <SearchIcon />
                    </div>
                    <div>
                        <Todo />
                    </div>
                </div>
                <div className="space-y-3">
                    {
                        todos.map((item) => (
                            <div className="border border-yellow-400 flex items-center gap-4 px-4  " key={item._id} >
                                <Checkbox />
                                <p>{item.todo}</p>
                                <div className="bg-red-500 rounded-full size-4  ml-auto" />
                            </div>
                        ))
                    }
                </div>

            </Container>

        </div>

    );
};

export default Todos; 