exports.fontSize = {
  option: 'fontSize',
  prop: 'font-size',
  unit: true
}

exports.lineHeight = {
  option: 'lineHeight',
  prop: 'line-height'
}

exports.fontStyle = {
  prop: 'font-style',
  vals: [
    'normal',
    'italic'
  ]
}

exports.fontWeight = {
  prop: 'font-weight',
  vals: [
    'normal',
    'bold'
  ]
}

exports.textAlign = {
  prop: 'text-align',
  vals: [
    'left',
    'center',
    'right',
    'justify'
  ]
}

exports.textOverflow = {
  prop: 'text-overflow',
  vals: [
    'initial',
    'clip',
    'ellipsis'
  ]
}

exports.textDecoration = {
  prop: 'text-decoration',
  vals: [
    'underline',
    'overline',
    'line-through',
    'none'
  ]
}

exports.textTransform = {
  prop: 'text-transform',
  vals: [
    'uppercase',
    'lowercase',
    'capitalize',
    'none'
  ]
}

exports.verticalAlign = {
  prop: 'vertical-align',
  vals: [
    { bl: 'baseline' },
    'top',
    'middle',
    'bottom'
  ]
}

exports.whiteSpace = {
  prop: 'white-space',
  vals: [
    'normal',
    { nw: 'nowrap' },
    'pre',
    'inherit'
  ]
}

exports.textColumn = {
  option: 'textColumns',
  prefix: 'tc',
  prop: 'columns'
}
