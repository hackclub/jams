---
title: 'Tier List w/ React'
description: 'Create a tier list with React!'
contributor: 'KeenanOH'
contributorSlackID: 'U05SNTKIW0N'
thumbnail: 'https://i.ibb.co/TMGj2LY/image.png'
timeEstimate: '60 Min'
difficulty: 'Intermediate'
keywords: 'react, tailwind, typescript'
#presentation: 'link to figma slides'
#presentationPlay: 'link to figma slides in presentation mode'
#presentationPDF: 'link to pdf of slides'
#notes: 'link to notes (optional)'
#poster: 'link to poster (optional)'
#video: 'link to video (optional)'
slug: 'tier-list'
---

# Setup
Fork the [starter code](https://stackblitz.com/edit/vitejs-vite-eiq9ch?file=src%2FApp.tsx).

_Optional_: Create a StackBlitz account to save your work.

# The Basics
**Draggable** - something that can be dragged within droppables

**Droppable** - something that can hold draggables

We are going to be using [hello-pangea/dnd](https://github.com/hello-pangea/dnd) to help us with dragging and dropping since it provides a nice, easy-to-use abstraction.


# Part 1: Creating a Draggable
First, we want to create our key components. The `DataCard` represents each object within the tier-list.

![](https://i.ibb.co/PtVn0NT/image.png)

**components/DataCard.tsx**
```tsx
import { Draggable } from '@hello-pangea/dnd';

interface DataCardProps {
    id: string;
    index: number;
    imageUrl: string;
}

export default function DataCard({ id, index, imageUrl }: DataCardProps) {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <img className="w-16" src={imageUrl} />
                </div>
            )}
        </Draggable>
    );
}
```

# Part 2: Create a Droppable
Each tier has a droppable area where items can be moved around!
![](https://i.ibb.co/dbMNn4D/image.png)

**components/Tier.tsx**
```tsx
import { Droppable } from '@hello-pangea/dnd';
import DataCard from './DataCard';

export default function Tier({
    name,
    data,
    className = '',
}: {
    name: string;
    data: { id: string; imageUrl: string }[];
    className?: string;
}) {
    return (
        <div className="flex">
            <div className={'w-32 py-8 text-center ' + className}>{name}</div>

            <Droppable droppableId={name} direction="horizontal">
                {(provided) => (
                    <div
                        className="pl-4 flex flex-wrap items-center gap-4 border w-full select-none"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {data.map((data, index) => (
                            <DataCard
                                key={data.id}
                                id={data.id}
                                index={index}
                                imageUrl={data.imageUrl}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}
```

# Part 3: Put it all together
**App.tsx**
```tsx
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import Tier from './components/Tier';
import { useTierState } from './useTierState';
import { arrayMove, arrayTransfer } from './helpers';

export default function App() {
    const [tiers, setTiers] = useTierState();

    function onDragEnd(result: DropResult) {
        if (!result.destination) return;

        const oldIndex = result.source.index;
        const newIndex = result.destination.index;
        const oldTierName = result.source.droppableId;
        const newTierName = result.destination.droppableId;

        if (oldTierName === newTierName)
            setTiers((prevTiers) => {
                const tier = prevTiers.find(
                    (tier) => tier.name === oldTierName
                )!;

                arrayMove(tier.data, oldIndex, newIndex);

                return prevTiers;
            });
        else
            setTiers((prevTiers) => {
                const oldTier = prevTiers.find(
                    (tier) => tier.name === oldTierName
                )!;
                const newTier = prevTiers.find(
                    (tier) => tier.name === newTierName
                )!;

                arrayTransfer(oldTier.data, newTier.data, oldIndex, newIndex);

                return prevTiers;
            });
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                {tiers.map((tier) => (
                    <Tier
                        key={tier.name}
                        className={tier.className}
                        name={tier.name}
                        data={tier.data}
                    />
                ))}
            </div>
        </DragDropContext>
    );
}
```

# Final Code Example
https://stackblitz.com/edit/vitejs-vite-dpvrzw?file=README.md
