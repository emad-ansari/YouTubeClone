import { useState, useRef, useEffect } from 'react';
import Button from './Button'
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

interface CategoryPillsProps {
    categories: string[];
    selectedCategory: string;
    onSelect: (category: string) => void
}

const TRANSLATE_AMOUNT = 200;




export const CategoryPills = ({ categories, selectedCategory, onSelect }: CategoryPillsProps) => {

    const[isLeftVisible, setIsLeftVisible] = useState<boolean>(false);
    const[isRightVisible, setIsRightVisible] = useState<boolean>(true);
    const[translate, setTranslate] = useState<number>(0);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current == null) return;
        const observer = new ResizeObserver(entries => {
            const container = entries[0]?.target;
            if (container == null) return;
            setIsLeftVisible(translate > 0);

            setIsRightVisible( translate + container.clientWidth < container.scrollWidth);

        })

    }, [categories, translate])

    return (
        <div 
            className = 'overflow-hidden mb-2'
            // ref = {containerRef}
        >
            <div 
                className = 'flex gap-3 py-2.5  overflow-x-scroll' 
                style = {{transform: `translateX(-${translate}px)`}}
                >
                {
                    categories.map((category, index) => (
                        <Button 
                            key = {index}
                            variant = { selectedCategory === category ? "dark": 'default'}
                            className = 'py-1 px-3 rounded-lg whitespace-nowrap '
                            onClick = {() => onSelect(category)}
                        >
                            {category}
                        </Button>
                    ))
                }
          
            </div>
{/*             
            {
                isLeftVisible && (
                <div className = 'absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white  from-50% to-transparent w-24 h-full'>
                    <Button 
                        size={'icon'}
                        variant={'ghost'}
                        className = 'h-full aspect-square w-auto p-1.5'
                        onClick = {() => {
                            setTranslate(translate => {
                                const newTranslate = translate - TRANSLATE_AMOUNT;
                                if (newTranslate <= 0) return 0;
                                return newTranslate;
                            })
                        }}
                        >
                        <RiArrowLeftSLine/>
                    </Button>
                </div>
                )
            } */}
            {/* 
            
            {
                isRightVisible && (
                <div className = 'absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white  from-50% to-transparent w-24 h-full flex justify-end'>
                    <Button 
                        size={'icon'}
                        variant={'ghost'}
                        className = 'h-full aspect-square w-auto p-1.5'
                        onClick = {() => {
                            setTranslate(translate => {
                                if (containerRef.current === null) {
                                    return translate;
                                }
                                const newTranslate = translate + TRANSLATE_AMOUNT;
    
                                const edge = containerRef.current.scrollWidth;
                                const width = containerRef.current.clientWidth;
    
                                if (newTranslate + width >= edge) {
                                    return edge - width;
                                }
                                return newTranslate;
                            })
                          
                        }}
                        >
                        <RiArrowRightSLine/>
                    </Button>
                </div>
                )
            } */}
        </div>
    )
}

