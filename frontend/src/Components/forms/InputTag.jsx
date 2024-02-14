import React, { useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const InputTag = ((props) => {
    const { placeholder, tags, setTags, className } = props;
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const newTag = inputValue.trim();
            if (newTag && !tags.includes(newTag)) {
                setTags([...tags, newTag]);
            }
            setInputValue('');
        }
    };

    const removeTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };
    return (
        <div>
            <div className={`flex flex-wrap gap-2 rounded-md ${tags.length !== 0 && 'mb-3'}`}>
                {tags.map((tag, index) => (
                    <span key={index} className="transition-all bg-white border-neutral-400 border bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-8 items-center text-sm pl-2 rounded-md">
                        {tag}
                        <Button
                            type="button" 
                            variant="ghost"
                            onClick={() => removeTag(tag)}
                            className={cn("py-1 px-3 h-full hover:bg-transparent")}
                        >
                            <X size={14} />
                        </Button>
                    </span>
                ))}
            </div>
            <Input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                disabled={tags.length >= 5 ? true: false}
                className={cn("input_style border-neutral-400",{className},tags.length > 5 ?'cursor-not-allowed': '')}
            />
        </div>
    );
});

InputTag.displayName = 'InputTag';

export default InputTag;