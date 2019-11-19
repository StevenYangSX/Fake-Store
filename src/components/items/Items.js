import React, { useState, useEffect, Fragment } from "react";
import Item from "./Item";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // const allItem = axios.get(
    //   "http://quiet-dawn-64698.herokuapp.com/api/items"
    // );
    setItems([
      {
        brand: {
          name: "gibson",
          popularity: true
        },
        isOnSale: false,
        isAvailable: true,

        name: "guitar",
        category: "musical instrument",
        price: 1299.99,
        model: "les paul",
        details: "Brand new Gibson LP 2015.",
        isFeatured: false,
        remaining: 3,
        imageUrl:
          "https://multimedia.bbycastatic.ca/multimedia/products/500x500/126/12654/12654323.jpg"
      },
      {
        brand: {
          name: "fender",
          popularity: true
        },
        isOnSale: false,
        isAvailable: true,
        name: "guitar",
        category: "musical instrument",
        price: 3299.99,
        model: "telecaster",
        details:
          "Brand new Fender Custom Telecaster. Rosewood, Aged Lake Placid Blue.",
        isFeatured: false,
        remaining: 1,
        imageUrl:
          "https://multimedia.bbycastatic.ca/multimedia/products/500x500/135/13504/13504199.jpg"
      },
      {
        brand: {
          name: "casio",
          popularity: true
        },
        isOnSale: false,
        isAvailable: true,
        name: "keyboard",
        category: "musical instrument",
        price: 299.69,
        model: "CTK-3500",
        details:
          "Polish up your piano-playing chops with this 61-key Casio CTK-3500 electronic keyboard. Suitable for intermediate players, this keyboard features 61 piano-style keys, a 48-note polyphony, 400 built-in tones, and 100 built-in rhythms, as well as Step-Up Lessons, a built-in pedal jack, and compatibility with the Chordana Play app.",
        isFeatured: false,
        remaining: 5,
        imageUrl:
          "https://multimedia.bbycastatic.ca/multimedia/products/500x500/107/10733/10733539.jpg"
      },
      {
        brand: {
          name: "Yamaha",
          popularity: true
        },
        isOnSale: true,
        isAvailable: true,
        name: "keyboard",
        category: "musical instrument",
        price: 629.99,
        model: "P45 B",
        details:
          "The Yamaha P-45 is a compact, lightweight, and stylish digital piano equipped with 88 fully weighted keys and key features that provide a high-quality piano sound. These include AWM stereo sampling for an enjoyable grand piano reverberation effect, and Graded Hammer Standard action that ensures an authentic piano-playing experience.",
        isFeatured: true,
        remaining: 2,
        imageUrl:
          "https://multimedia.bbycastatic.ca/multimedia/products/500x500/103/10381/10381568.jpg"
      },
      {
        brand: {
          name: "Carlsbro",
          popularity: true
        },
        isOnSale: false,
        isAvailable: true,
        name: "drum",
        category: "musical instrument",
        price: 799.99,
        model: "CSD130XXX",
        details:
          "Experience CD-quality sound with an acoustic drum feel with the Carlsbro CSD130XXX electronic drum kit. Its range of features include 250 percussion voices, 20 preset drum kits, 10 user-defined drum kits, 20 demo songs, and various connectivity options.",
        isFeatured: false,
        remaining: 20,
        imageUrl:
          "https://multimedia.bbycastatic.ca/multimedia/products/500x500/135/13504/13504199.jpg"
      },
      {
        brand: {
          name: "Audio-Technica",
          popularity: true
        },
        isOnSale: false,
        isAvailable: true,
        name: "Headphones",
        category: "musical instrument",
        price: 149.99,
        model: "ATH-M40x",
        details:
          "Access vibrant, immersive sound for everything from music enjoyment to audio engineering. M-series professional monitor headphones from Audio-Technica enhance your studio experience with superior sound isolation and professional-grade construction. The M40 model is tuned flat for accurate audio monitoring across an extended frequency range.",
        isFeatured: false,
        remaining: 10,
        imageUrl:
          "https://multimedia.bbycastatic.ca/multimedia/products/500x500/103/10359/10359711.jpg"
      },
      {
        brand: {
          name: "Shure",
          popularity: true
        },
        isOnSale: false,
        isAvailable: true,
        name: "Microphone",
        category: "musical instrument",
        price: 44.99,
        model: "PG48-LC",
        details:
          'Whether you\'re performing a song or giving a speech, you can ensure your voice is heard loud and clear with the Shure PG48-LC cardioid dynamic vocal microphone. Designed specifically for vocal applications, this microphone picks up the most sound from the front of the mic and some sound from the sides. The steel mesh ball grill with "pop" filter helps minimize breath sounds and wind noise.',
        isFeatured: false,
        remaining: 2,
        imageUrl:
          "https://multimedia.bbycastatic.ca/multimedia/products/500x500/102/10252/10252052.jpg"
      },
      {
        brand: {
          name: "Behringer",
          popularity: true
        },
        isOnSale: false,
        isAvailable: true,
        name: "Audio Interface",
        category: "musical instrument",
        price: 74.99,
        model: "UMC22",
        details:
          "The Behringer U-PHORIA UMC22 is a 2x2 USB audio interface for recording microphones and instruments, capable of tracking audio with sampling rates up to 48kHz. It works with popular recording software and supports Mac OS X and Windows XP.",
        isFeatured: false,
        remaining: 5,
        imageUrl:
          "https://multimedia.bbycastatic.ca/multimedia/products/500x500/103/10321/10321562.jpg"
      },
      {
        brand: {
          name: "Fender",
          popularity: true
        },
        isOnSale: false,
        isAvailable: true,
        name: "Amp",
        category: "musical instrument",
        price: 134.99,
        model: "Acoustasonic 15W",
        details:
          'Give your jam more juice with the Fender Acoustasonic 15. This portable amp boosts sound from acoustic-electric guitars and mics, driving 15 watts of power through full range 6" speakers equipped with a whizzer cone for enhanced high-frequency response. A vintage vibe from its brown textured vinyl covering with chrome hardware brings a sense of style to this sonic scene stealer.',
        isFeatured: false,
        remaining: 5,
        imageUrl:
          "https://multimedia.bbycastatic.ca/multimedia/products/500x500/102/10260/10260795.jpg"
      }
    ]);
    // console.log(allItem);
  }, []);

  return (
    <Fragment>
      <div class="container">
        <div class="row">
          {items.map(item => (
            <Item
              brand={item.brand.name}
              name={item.name}
              key={item._id}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Items;
