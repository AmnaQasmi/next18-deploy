import { NavItems } from "@/models/Headers"
import { UserObject } from "@/models/User"

export const userInfo : UserObject ={
    name:'Ralph R. Deybass',
   carlooks:'“ A MODERN MACHINE WITH A TOUCH OF HUMANITY ” ',
   slogan:'“ Stand out, drive bold! ” ',
   carsCategory:{id:['HYPERSPORT']},
   carsCategory1:{id:['SUPERSPORT']},
   carsCategory2:{id:['GHIATH']},
   about:'<p> W Motors was founded in Lebanon in July 2012. W Motors took inspiration from ancient Norse mythology and the tale of Fenrir, a fierce wolf of formidable size and strength, who was bound to the earth by chains. W Motors broke the bonds of conventional hypercar design with the Fenyr SuperSport to unleash a powerful, high-performance supercar in a league of its own.</p>',
   furious7:'<p>The first hypercar created by W Motors, the Lykan HyperSport, catapulted the company to international stardom when it took center stage in Universal Studios&#39; Furious 7. It was featured as the hero car in the movie and is the most expensive car ever to be featured in The Fast & The Furious Franchise.</p>',
   inspiredStory:'<p>The “Lycan” is the most advanced species of Wolves in mythical legends. Hidden under an elegant and luxurious mask, the Lycan can transform at any given time should the need arise to show its power and leadership. Written with a “k”, W Motors Lykan is an exceptional hypercar with an elegant yet agile look, able to transform at any given time into a beast, the most advanced of them all.</p>',
   exterior:'<p>With a hand-crafted carbon fiber body, the Hypercars and ghiath has a timeless look and angular styling as its work. Its patented reverse dihedral door system accentuates its lines, and the dynamic spoiler completes the exclusive design.</p>',
   services:{
    id: ['Design' , 'Manufacturing' , 'Repairing' , 'Development' , 'Marketing' , 'Selling' , 'Modification']
   }
}

export const headerItems: NavItems =  {
    home: { label: 'Home', page: 'home' },
    intro: { label: 'Intro', page: 'intro' },
    about: { label: 'About', page: 'about' },
    story: { label: 'Story', page: 'story' },
    services: { label: 'Services', page: 'services', info: ['maintenance'] },
    contact: { label: 'Contact', page: 'contact', info: ['amnaqasmi360@gmail.com'] }
}
