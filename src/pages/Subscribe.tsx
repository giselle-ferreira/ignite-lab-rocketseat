import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";


const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscriber ($name:String!, $email:String!) {
        createSubscriber(data: {name: $name, email: $email}) {
        id
      }
    }
`;

export function Subscribe() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);


    async function handleSubscribe(ev: FormEvent) {
        ev.preventDefault()

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate('/event');
    }
    // sm:max-w-[90%] 

  return (   
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <div className="w-full md:max-w-[1100px] sm:flex-col md:flex md:flex-row items-center justify-between mx-auto mt-20" >
            <div className="md:max-w-[640px] sm:max-w-[85%] md:mx-0 sm:mx-auto md:text-left sm:text-center">
                <Logo />
                <h1 className="mt-8 md:text-[2.5rem] sm:text-[2rem] leading-tight md:mb-4 sm:mb-6">
                    Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                </h1>
                <p className="mt-4 text-gray-200 md:leading-relaxed md:mb-0 sm:mb-8 sm:text-justify md:text-base sm:text-sm">
                    Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                </p>
            </div>

            <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                <strong className="md:text-2xl sm:text-xl mb-6 block">Inscreva-se gratuitamente</strong>

                <form onSubmit={handleSubscribe} className="flex flex-col gap-2 md:w-full sm:w-full">
                    <input
                    onChange={ev => setName(ev.target.value)} 
                    className="bg-gray-900 rounded px-5 h-14"
                    type="text"
                    placeholder="Seu nome completo" />

                    <input
                    onChange={ev => setEmail(ev.target.value)} 
                    className="bg-gray-900 rounded px-5 h-14"
                    type="email"
                    placeholder="Digite seu email" />

                    <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                    >
                        Garantir minha vaga
                    </button>
                </form>
            </div>
        </div>
        <img src="/src/assets/code-mockup.png"  className="mt=10" alt="" />
    </div>
  )
}

