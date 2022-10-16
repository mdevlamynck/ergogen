module.exports = {
    nets: {
        diode_in: undefined,
        diode_out: undefined
    },
    params: {
        class: 'D'
    },
    body: p => `
      (module Diode_SMD:crkbd-diode (layer F.Cu) (tedit 5F6F4F87)
        ${p.at}

        (descr "Resitance 3 pas")
        (tags R)
        (autoplace_cost180 10)
        (fp_text reference D1 (at 0.5 0 -180) (layer F.Fab) hide
          (effects (font (size 0.5 0.5) (thickness 0.125)))
        )
        (fp_text value D (at -0.6 0 -180) (layer F.Fab) hide
          (effects (font (size 0.5 0.5) (thickness 0.125)))
        )
        (fp_line (start -0.5 -0.5) (end -0.5 0.5) (layer F.SilkS) (width 0.15))
        (fp_line (start -0.4 0) (end 0.5 -0.5) (layer F.SilkS) (width 0.15))
        (fp_line (start 0.5 0.5) (end -0.4 0) (layer F.SilkS) (width 0.15))
        (fp_line (start 0.5 -0.5) (end 0.5 0.5) (layer F.SilkS) (width 0.15))
        (fp_line (start -0.5 -0.5) (end -0.5 0.5) (layer B.SilkS) (width 0.15))
        (fp_line (start 2.7 -0.75) (end 2.7 0.75) (layer F.SilkS) (width 0.15))
        (fp_line (start -2.7 -0.75) (end -2.7 0.75) (layer F.SilkS) (width 0.15))
        (fp_line (start 2.7 -0.75) (end -2.7 -0.75) (layer F.SilkS) (width 0.15))
        (fp_line (start -2.7 0.75) (end 2.7 0.75) (layer F.SilkS) (width 0.15))
        (fp_line (start -0.4 0) (end 0.5 -0.5) (layer B.SilkS) (width 0.15))
        (fp_line (start 0.5 -0.5) (end 0.5 0.5) (layer B.SilkS) (width 0.15))
        (fp_line (start 0.5 0.5) (end -0.4 0) (layer B.SilkS) (width 0.15))
        (fp_line (start 2.7 -0.75) (end -2.7 -0.75) (layer B.SilkS) (width 0.15))
        (fp_line (start -2.7 -0.75) (end -2.7 0.75) (layer B.SilkS) (width 0.15))
        (fp_line (start -2.7 0.75) (end 2.7 0.75) (layer B.SilkS) (width 0.15))
        (fp_line (start 2.7 0.75) (end 2.7 -0.75) (layer B.SilkS) (width 0.15))
        (pad 2 smd rect (at 1.775 0 ${p.rot}) (size 1.3 0.95) (layers F.Cu F.Paste F.Mask) ${p.net.diode_in.str})
        (pad 1 smd rect (at -1.775 0 ${p.rot}) (size 1.3 0.95) (layers B.Cu B.Paste B.Mask) ${p.net.diode_out.str})
        (pad 2 smd rect (at 1.775 0 ${p.rot}) (size 1.3 0.95) (layers B.Cu B.Paste B.Mask) ${p.net.diode_in.str})
        (pad 1 smd rect (at -1.775 0 ${p.rot}) (size 1.3 0.95) (layers F.Cu F.Paste F.Mask) ${p.net.diode_out.str})
      )
    `
}
