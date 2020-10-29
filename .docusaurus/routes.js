
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','fdd'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','8fc'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','15f'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','3a8'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','575'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','0f7'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','a2f'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','6d6'),
  exact: true,
},
{
  path: '/docs/math_problems',
  component: ComponentCreator('/docs/math_problems','8e5'),
  exact: true,
},
{
  path: '/docs/math_problems_binary_8bit',
  component: ComponentCreator('/docs/math_problems_binary_8bit','664'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','955'),
  exact: true,
},
{
  path: '/docs/style_guide',
  component: ComponentCreator('/docs/style_guide','887'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
