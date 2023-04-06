/* External dependencies */
import React from 'react'

import { createRoot } from 'react-dom/client'
import {
  MemoryRouter,
  Route,
  Routes,
} from 'react-router-dom'

import {
  BezierProvider,
  LightFoundation,
} from '@channel.io/bezier-react'

/* Internal dependencies */
import ExtractSuccess from './components/ExtractSuccess'
import Home from './components/Home'
import IconExtract from './components/IconExtract'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <BezierProvider foundation={LightFoundation}>
    <MemoryRouter>
      <Routes>
        <Route index element={(<Home />)} />
        <Route path="extract" element={(<IconExtract />)} />
        <Route path="extract_success" element={(<ExtractSuccess />)} />
      </Routes>
    </MemoryRouter>
  </BezierProvider>,
)
