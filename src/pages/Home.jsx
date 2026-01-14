import React from 'react'
import HeroBanner from '../component/HeroBanner'
import Services from '../component/Services'
import GalleryPreview from '../component/GalleryPreview'
import PricingCTA from '../component/PricingCTA'

export default function Home() {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Services></Services>
            <GalleryPreview></GalleryPreview>
            <PricingCTA></PricingCTA>
        </div>
    )
}
