
export interface PortfolioItem {
    id: string;
    before: string;
    after: string;
    title?: string;
    category?: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: '1',
        before: new URL('../assets/before.JPG', import.meta.url).href,
        after: new URL('../assets/after.png', import.meta.url).href,
        title: 'Brand Transformation 1',
        category: 'Social Media'
    },
    {
        id: '2',
        before: new URL('../assets/before2.JPG', import.meta.url).href,
        after: new URL('../assets/after2.png', import.meta.url).href,
        title: 'Brand Transformation 2',
        category: 'Social Media'
    },
    {
        id: '3',
        before: new URL('../assets/before3.jpg', import.meta.url).href,
        after: new URL('../assets/after3.png', import.meta.url).href,
        title: 'Brand Transformation 3',
        category: 'Social Media'
    },
    {
        id: '4',
        before: new URL('../assets/before4.png', import.meta.url).href,
        after: new URL('../assets/after4.png', import.meta.url).href,
        title: 'Brand Transformation 4',
        category: 'Social Media'
    },
    {
        id: '5',
        before: new URL('../assets/before5.JPG', import.meta.url).href,
        after: new URL('../assets/after5.png', import.meta.url).href,
        title: 'Brand Transformation 5',
        category: 'Social Media'
    },
];
