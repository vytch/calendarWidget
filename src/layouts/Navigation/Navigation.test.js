/**

/parent/child/grandchild
=> ['parent', 'child', 'grandchild']

What we want:
[
  parent {
    children:[
      child {
        children:[
          grandchild {
          }
        ]
      }
    ]
  }
]
*/

const getNavigationStructure = routes => {

}

describe('The navigation', () => {
  const routes = [
    { 
      path: '/demo',
      name: 'Demo',
    },
    { 
      path: '/demo/page1',
      name: 'Page 1',
    },
    { 
      path: '/demo/page2',
      name: 'Page 2',
    },
    { 
      path: '/demo/section1/page1',
      name: 'Section 1 Page 1',
    },
    { 
      path: '/demo/section1/page2',
      name: 'Section 1 Page 2',
    },
    { 
      path: '/demo/section2/page1',
      name: 'Section 2 Page 1',
    },
    { 
      path: '/demo/section2/page2',
      name: 'Section 2 Page 2',
    }
  ];
  beforeEach(()=>{
    console.log('testing navigation');
  });
  test('should build the object from route', () => {
    const output = [
      {
        path: '/demo',
        name: 'Demo',
        children: [
          {
            path: '/demo/page1',
            name: 'Page 1',
          },
          {
            path: '/demo/page2',
            name: 'Page 2',
          },
          {
            path: '/demo/section1/page1',
            name: 'Section 1 Page 1',
          },
          {
            path: '/demo/section1/page2',
            name: 'Section 1 Page 2',
          }
        ]
      }
    ];
    expect(true).toBe(true);
  });
});
