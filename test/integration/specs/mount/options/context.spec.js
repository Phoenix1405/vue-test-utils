import mount from '~src/mount'

describe('context', () => {
  it('mounts functional component when passed context object', () => {
    const Component = {
      functional: true,
      render (h, { props }) {
        return h('div')
      },
      name: 'common'
    }
    const context = {
      data: { hellpo: true },
      props: { show: true }
    }

    const wrapper = mount(Component, { context })
    expect(wrapper.is(Component)).to.equal(true)
  })

  it('throws error if non functional component is passed with context option', () => {
    const Component = {
      render: h => h('div')
    }
    const context = {}
    const message = 'mount.context can only be used when mounting a functional component'
    expect(() => mount(Component, { context })).to.throw(Error, message)
  })

  it('throws error if context option is not an object', () => {
    const Component = {
      functional: true,
      render: h => h('div')
    }
    const context = 'string'
    const message = 'mount.context must be an object'
    expect(() => mount(Component, { context })).to.throw(Error, message)
  })
})
