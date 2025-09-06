import { Link } from 'react-router';
import { MainLayout } from './layouts/MainLayout';

function SetupPage() {
    return (
        <MainLayout hideHeader={true} language='pt-br'>
            <section>
                <Link to="/">Voltar</Link>
            </section>
            <main>
                <h2>Configuração</h2>
                <hr />
                <section>
                    <h3>Desktop</h3>
                    <ul>
                        <li>AMD Ryzen 3800X</li>
                        <li>48 GB de RAM</li>
                        <li>SSD SATA de 250 GB (<small>Windows 11</small>)</li>
                        <li>SSD NVMe de 500 GB (<small>Linux, NixOS 24.05</small>)</li>
                        <li>HD de 1TB (<small>compartilhado</small>)</li>
                        <li>NVIDIA Geforce RTX 2070 SUPER</li>
                    </ul>
                </section>
                <section>
                    <h3>Portátil</h3>
                    <ul>
                        <li>Intel Core i5-1334U</li>
                        <li>16 GB de RAM</li>
                        <li>SSD NVMe de 1 TB (<small>Linux, Fedora 42</small>)</li>
                        <li>Intel Iris Xe</li>
                    </ul>
                </section>
                <section>
                    Em ambos os casos:
                    <ul>
                        <li>DE: <code>GNOME</code></li>
                        <li>shell: <code>fish</code></li>
                        <li>Editores/IDEs: <ul>
                            <li><code>GNU emacs</code> no Linux</li>
                            <li><code>vscode</code> no Windows</li>
                            <li><code>neovim</code> como editor auxiliar</li>
                        </ul></li>
                        <li>Esquema de cores: alguma variação do <code>gruvbox</code></li>
                    </ul>
                </section>
            </main>
        </MainLayout>
    )
}

export default SetupPage
