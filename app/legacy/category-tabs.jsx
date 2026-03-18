'use client';

import { useState } from 'react';
import { GITHUB_RAW_BASE } from '../data/image-savings';
import { LegacyBadge } from '../components/savings-badge';

const menCategories = [
  { file: 'sp26-popularcategories-shortsleevetees.png', alt: 'Short Sleeve Tees', label: 'Short Sleeve Tees' },
  { file: 'sp26-popularcategories-shorts.png', alt: 'Shorts', label: 'Shorts' },
  { file: 'sp26-popularcategories-hoodies.png', alt: 'Hoodies', label: 'Hoodies' },
  { file: 'sp26-popularcategories-pants.png', alt: 'Pants', label: 'Pants' },
  { file: 'sp26-popularcategories-boardshorts.png', alt: 'Boardshorts', label: 'Boardshorts' },
  { file: 'sp26-popularcategories-long_sleeves.png', alt: 'Long Sleeves', label: 'Long Sleeves' },
  { file: 'sp26-popularcategories-joggers.png', alt: 'Joggers', label: 'Joggers' },
  { file: 'sp26-popularcategories-accessories.png', alt: 'Accessories', label: 'Accessories' },
  { file: 'sp26-popularcategories-jackets.png', alt: 'Jackets', label: 'Jackets' }
];

const womenCategories = [
  { file: 'sp26-popularcategories-matchingsets.png', alt: 'Matching Sets', label: 'Matching Sets' },
  { file: 'sp26-popularcategories-sweatshirts.png', alt: 'Hoodies and Sweatshirts', label: 'Hoodies & Sweatshirts' },
  { file: 'sp26-popularcategories-leggings_and_tanks.png', alt: 'Leggings', label: 'Leggings' },
  { file: 'sp26-popularcategories-womens_shorts.png', alt: 'Shorts', label: 'Shorts' },
  { file: 'sp26-popularcategories-womensswim.png', alt: 'Swim', label: 'Swim' },
  { file: 'sp26-popularcategories-lstops.png', alt: 'Long Sleeve Tops', label: 'Long Sleeve Tops' },
  { file: 'sp26-popularcategories-dreamknit_pants.png', alt: 'Joggers and Sweatpants', label: 'Joggers & Sweatpants' },
  { file: 'sp26-popularcategories-axs-womens.png', alt: 'Accessories', label: 'Accessories' }
];

function CategoryGrid({ categories }) {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <div className="category-card" key={category.file}>
          <div className="category-img-wrap">
            <img
              src={`${GITHUB_RAW_BASE}/${category.file}`}
              alt={category.alt}
              loading="lazy"
            />
            <LegacyBadge file={category.file} />
          </div>
          <span className="category-label">{category.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function LegacyCategoryTabs() {
  const [activeTab, setActiveTab] = useState('men');

  return (
    <>
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'men' ? 'active' : ''}`}
          onClick={() => setActiveTab('men')}
          type="button"
        >
          Men
        </button>
        <button
          className={`tab-btn ${activeTab === 'women' ? 'active' : ''}`}
          onClick={() => setActiveTab('women')}
          type="button"
        >
          Women
        </button>
      </div>
      {activeTab === 'men' ? (
        <CategoryGrid categories={menCategories} />
      ) : (
        <CategoryGrid categories={womenCategories} />
      )}
    </>
  );
}
