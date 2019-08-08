export default {
  // label: 'root',
  // link: 'none',
  nodes: [
    { label: 'about', link: '#about' },
    { label: 'content', link: '#content' },
    { label: 'boat', link: '#boat' },
    {
      label: 'coreography',
      link: '#coreography',
      nodes: [
        { label: 'movements', link: '#movements' },
        { label: 'strategies', link: '#strategies' },
        { label: 'light system', link: '#lightsystem' },
        { label: 'control', link: '#control' }
      ]
    },
    { label: 'dance', link: '#dance' }
  ]
}

// { about: {}},
// {location: {}},
// {boat: {}},
// {coreography: {
//   movements: {},
//   strategies: {},
//   'lights system': {},
//   control: {}
// }},
// dance: {}
// ]
