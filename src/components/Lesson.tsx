import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
// isPast checks if a date is in the past

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}


export function Lesson(props: LessonProps) {

    const { slug } = useParams<{ slug: string }>();

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", 
    { locale: ptBR })


    const isActiveLesson = slug === props.slug;


    return( 
        <Link to={`/event/Lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div
            className={`rounded border relative border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : '' }`}
            >
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={`flex items-center gap-2 text-sm  font-medium ${isActiveLesson ? 'text-white' : 'text-blue-500' }`}>
                        <CheckCircle size={20}/>
                        Conteúdo liberado
                        </span>
                    ) : (
                        <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                        <Lock size={20}/>
                        Em breve
                        </span>
                    )}

                    {isActiveLesson ? (
                        <span className="w-[13px] h-[13px] bg-green-500 rounded absolute bottom-[45%] left-[-6px] rotate-45"></span>
                    ) : (
                        ''
                    ) };           

                    <span className={`text-xs rounded py-[0.125rem] px-2 text-white border font-bold ${isActiveLesson ? 'border-white' : 'border-green-300' }`}>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={` mt-5 block ${isActiveLesson ? 'text-white' : 'text-gray-200' }`}>
                    {props.title}                    
                </strong>
            </div>
        </Link>
    )
}