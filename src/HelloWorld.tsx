import { createSignal, creatEffect } from 'solid-js'
import { invoke } from '@tauri-apps/api'

export function HelloWorld() {
    const [name, setName] = createSignal('Hello, Tauri!');
    createEffect(async (event) => {
        const newName = await invoke('greet', { name: 'World' })
        setName(newName)
    });

    return (
        <div>
            <h1>{name}</h1>
       </div>
    );
}
