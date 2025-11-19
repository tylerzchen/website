"use client";

import React from "react";
import Image from "next/image";

interface Book {
  title: string;
  author: string;
  imagePath: string;
}

const currentlyReading: Book[] = [
  {
    title: "The Wolves of K Street",
    author: "Brody Mullins and Luke Mullins",
    imagePath: "/wolvesofkstreet.jpg",
  },
  {
    title: "Crying in H Mart",
    author: "Michelle Zauner",
    imagePath: "/hmartphoto.jpg",
  },
];

const recommendations: Book[] = [
  {
    title: "Scythe",
    author: "Neal Shusterman",
    imagePath: "/scythe.jpg",
  },
  {
    title: "On Tyranny",
    author: "Timothy Snyder",
    imagePath: "/ontyranny.jpg",
  },
  {
    title: "War",
    author: "Sebastian Junger",
    imagePath: "/warsebastianjunger.jpg",
  },
  {
    title: "The Achilles Trap",
    author: "Steve Coll",
    imagePath: "/achillestrap.jpg",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    imagePath: "/dunefrankherbert.jpg",
  },
  {
    title: "The Poppy Wars",
    author: "R.F. Kuang",
    imagePath: "/poppywartriology.webp",
  },
];

const BookCard = ({ book }: { book: Book }) => (
  <div className="flex flex-col space-y-3">
    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 bg-gray-100">
      <Image
        src={book.imagePath}
        alt={book.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
    </div>
    <div className="space-y-1">
      <h3 className="font-medium text-gray-900 leading-tight">{book.title}</h3>
      <p className="text-sm text-gray-500">{book.author}</p>
    </div>
  </div>
);

export default function Bookshelf() {
  return (
    <div className="page-container">
      <div className="mb-12">
        <h1 className="heading-1 mb-6">
          Bookshelf
        </h1>
        <div className="flex flex-col gap-2">
          <p className="body-text">
            Books I&apos;m currently reading and books I love. Always open to recommendations!
          </p>
          <p className="meta-text">
            Last Updated: November 18th, 2025
          </p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="heading-3 mb-6 border-b pb-2">
          Currently Reading
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          {currentlyReading.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="heading-3 mb-6 border-b pb-2">
          Recommendations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          {recommendations.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
