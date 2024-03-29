---
title: 'Tier List w/ React'
description: 'Create a tier list with React!'
contributor: 'KeenanOH'
contributorSlackID: 'U05SNTKIW0N'
thumbnail: 'https://i.ibb.co/p0LHv5g/Slide-16-9-1.png'
timeEstimate: '60 Min'
difficulty: 'Intermediate'
keywords: 'react, tailwind, typescript'
presentation: ''
presentationPlay: ''
presentationPDF: ''
notes: ''
poster: ''
video: ''
slug: 'tier-list'
---

![](https://i.ibb.co/p0LHv5g/Slide-16-9-1.png)

# Setup
Fork the [starter code](https://stackblitz.com/edit/vitejs-vite-eiq9ch?file=src%2FApp.tsx).

_Optional_: Create a StackBlitz account to save your work.

# The Basics
**Draggable** - something that can be dragged within droppables

**Droppable** - something that can hold draggables

We are going to be using [hello-pangea/dnd](https://github.com/hello-pangea/dnd) to help us with dragging and dropping since it provides a nice, easy-to-use abstraction.


# Part 1: Creating a Draggable
We want to create our key components. The `DataCard` represents each object within the tier-list.

![](https://i.ibb.co/PtVn0NT/image.png)
First, navigate to **components/DataCard.tsx**.
We want to import `Draggable` from `@hello-pangea/dnd` and then define the arguments our component will take.
```tsx
import { Draggable } from '@hello-pangea/dnd'

interface DataCardProps {
    id: string // this is a unique identifier -- so we know what's getting dragged!
    index: number // this is the item's position within the tier
    imageUrl: string // this is the image!
}
```

After this, we can define our component.
```tsx
import { Draggable } from '@hello-pangea/dnd'

interface DataCardProps {
    id: string // this is a unique identifier -- so we know what's getting dragged!
    index: number // this is the item's position within the tier
    imageUrl: string // this is the image!
}

export default function DataCard({ id, index, imageUrl }: DataCardProps) {
    //
}
```

Within this, we can return our draggable `DataCard`. To create a draggable, you need to use the `Draggable` component from `@hello-pangea/dnd`. The child element will be a function which gives the needed references and props to be able to have a draggable. That function will return the Draggable's content. 
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

In this section, we are creating a droppable container! Within that container, we are also showing the tier's items.
First, navigate to **components/Tier.tsx**.

Let's define the props as well as component. We will also show the name of the tier.
```tsx
import { Droppable } from '@hello-pangea/dnd';
import DataCard from './DataCard';

interface TierProps {
    name: string
    data: { id: string, imageUrl: string }[]
    className?: string
}

export default function Tier({ name, data, className = '' }: TierProps) {
    return (
        <div className="flex">
            <div className={'w-32 py-8 text-center ' + className}>{ name }</div>

        </div>
    )
}
```

After this, we can start creating our droppable. Also, we will put our data into their respective tiers.

```tsx
import { Droppable } from '@hello-pangea/dnd';
import DataCard from './DataCard';

interface TierProps {
    name: string
    data: { id: string, imageUrl: string }[]
    className?: string
}

export default function Tier({ name, data, className = '' }: TierProps) {
    return (
        <div className="flex">
            <div className={'w-32 py-8 text-center ' + className}>{ name }</div>

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
    )
}
```

Droppable, similar to draggable, also requires a child function that returns the content. In this case, it would be the various DataCards from each element of `data`. In the 4th section, we'll go over how to customize this data.

# Part 3: Create the Tier List
Let's put all the previous parts together. In this part, simply map the different tiers from the `tiers` variable into `Tier` components.

**App.tsx**
```tsx
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import Tier from './components/Tier';
import { useTierState } from './useTierState';
import { arrayMove, arrayTransfer } from './helpers';

export default function App() {
    const [tiers, setTiers] = useTierState();

    function onDragEnd(result: DropResult) {
        // We will implement this together in the 5th part!
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

# Part 4: Customize Tier List!
If you run the site, you'll notice that there are already items in the tier list. However, we can customize this to whatever you want!

In the `useTierState.ts` file, you'll notice how each tier is defined. Each tier has a name, data, and a className.

Here's what you need to know:
- the tier name must be unique
- the className will only be applied to the box with the tier name
- for each item, the id must be unique

To customize your tier list, simply change the data within the unranked tier. **Tip**: You can drag and drop images into your project's `public` directory, or you can provide a direct link to the image.

Here's an example:
```
[
    {
        id: '1', imageUrl: 'https://i.ibb.co/DRd2Fg4/image.png',
    },
    {
        id: '2', imageUrl: 'my_image.png'
    }
]
```

# Part 5: Implementing onDragEnd
First, this function takes one argument, which is of type `DropResult`. This contains all the "context" of the event. For example, the draggable being dragged or the droppable which it's getting dragged to.

There are a couple cases we want to handle.
1. If the item (draggable) is not being moved to a tier (droppable).
2. If the item is being moved within the tier.
3. If the item is being moved between tiers.

Let's set that up:
```ts
function onDragEnd(result: DropResult) {
    if (!result.destination) return // we can't do anything if the item isn't being dragged into/within a tier

    const oldIndex = result.source.index // this is the original position of the item
    const newIndex = result.destination.index // this is the new position of the item
    const oldTierName = result.source.droppableId // this is the original tier of the item
    const newTierName = result.destination.droppableId // this is the new tier of the item

    if (oldTierName === newTierName) {
        // this means the item is being moved within the current tier
    } else {
        // this means the item is being moved to another tier
    }
}
```

Now, if the item is moved within the tier, we simply have to move the item within that tier's array of data. If the item is moved to another tier, we remove it from the old tier and add it to the new tier.

Here's how that looks like:
```ts
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
            
            arrayMove(tier.data, oldIndex, newIndex); // I've implemented this helper function for you!
            
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
            
            arrayTransfer(oldTier.data, newTier.data, oldIndex, newIndex); // I've implemented this helper function for you!
            
            return prevTiers
        });
}
```

# Final Code Example
https://stackblitz.com/edit/vitejs-vite-dpvrzw?file=README.md
