module.exports = {
    nets: {
      SDA: 'SDA',
      SCL: 'SCL',
      VCC: 'VCC',
      GND: 'GND',
      CS: 'CS',
    },
    params: {
      class: 'OLED',
	  side: 'F'
    },
    body: p => `
        (module lib:OLED_headers (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */} 

        ${'' /* footprint reference */}        
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${'' /* pins */}
        (pad 5 thru_hole oval (at 18.2 -5.08 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.SDA.str})
        (pad 4 thru_hole oval (at 18.2 -2.54 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.SCL.str})
        (pad 3 thru_hole oval (at 18.2 0 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.VCC.str})
        (pad 2 thru_hole rect (at 18.2 2.54 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.GND.str})
        (pad 1 thru_hole oval (at 18.2 5.08 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.CS.str})
        )
        `
}
