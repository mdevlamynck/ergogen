module.exports = {
  nets: {
    key_in: undefined,
    key_out: undefined,
    led_in: undefined,
    led_out: undefined,
    VCC: 'VCC',
    GND: 'GND'
  },
  params: {
    class: 'S',
    led: true,
  },
  body: p => {
    const led = `
        (fp_line (start -4.4 7.05154) (end -4.4 5.40054) (layer F.SilkS) (width 0.12))
        (fp_poly (pts (xy -4.4 3.365) (xy -4.4 2.349) (xy -3.392 2.349)) (layer B.SilkS) (width 0.1))

      (fp_line (start 1.8 3.149) (end -1.8 3.149) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 1.8 6.249) (end 1.8 3.149) (layer Edge.Cuts) (width 0.12))
      (fp_line (start -1.8 6.249) (end 1.8 6.249) (layer Edge.Cuts) (width 0.12))
      (fp_line (start -1.8 3.149) (end -1.8 6.249) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 3.9 2.349) (end -4.4 2.349) (layer B.SilkS) (width 0.12))
      (fp_line (start -3.9 7.049) (end 3.9 7.049) (layer B.SilkS) (width 0.12))
      (fp_line (start 2.94 4.329) (end 2.94 3.649) (layer Dwgs.User) (width 0.12))
      (fp_line (start 2.94 3.649) (end 1.6 3.649) (layer Dwgs.User) (width 0.12))
      (fp_line (start 1.6 4.329) (end 2.94 4.329) (layer Dwgs.User) (width 0.12))
      (fp_line (start 2.94 5.729) (end 2.94 5.049) (layer Dwgs.User) (width 0.12))
      (fp_line (start 2.94 5.049) (end 1.6 5.049) (layer Dwgs.User) (width 0.12))
      (fp_line (start 1.6 5.729) (end 2.94 5.729) (layer Dwgs.User) (width 0.12))
      (fp_line (start -2.94 5.049) (end -2.94 5.729) (layer Dwgs.User) (width 0.12))
      (fp_line (start -2.94 5.729) (end -1.6 5.729) (layer Dwgs.User) (width 0.12))
      (fp_line (start -1.6 5.049) (end -2.94 5.049) (layer Dwgs.User) (width 0.12))
      (fp_line (start -2.94 4.329) (end -1.6 4.329) (layer Dwgs.User) (width 0.12))
      (fp_line (start -2.94 3.649) (end -2.94 4.329) (layer Dwgs.User) (width 0.12))
      (fp_line (start -1.6 3.649) (end -2.94 3.649) (layer Dwgs.User) (width 0.12))
      (fp_line (start 1.6 3.299) (end 1.6 6.099) (layer Dwgs.User) (width 0.12))
      (fp_line (start -1.6 3.299) (end -1.6 6.099) (layer Dwgs.User) (width 0.12))
      (fp_line (start -1.6 6.099) (end 1.6 6.099) (layer Dwgs.User) (width 0.12))
      (fp_line (start -1.6 3.299) (end 1.6 3.299) (layer Dwgs.User) (width 0.12))
      (fp_poly (pts (xy -3.392 7.049) (xy -4.4 7.05154) (xy -4.4 6.03554)) (layer F.SilkS) (width 0.1))
      (fp_arc (start 1.275 -2.4) (end 1.275 -3.575) (angle 90) (layer B.SilkS) (width 0.15))
      (fp_arc (start 4.3 -8.3) (end 4.3 -6.025) (angle 70) (layer B.SilkS) (width 0.15))
      (fp_arc (start -1.3 -4.575) (end -1.3 -3.575) (angle 90) (layer B.SilkS) (width 0.15))
      (fp_arc (start -1.3 -7.225) (end -1.3 -8.225) (angle -90) (layer B.SilkS) (width 0.15))
      (fp_arc (start 1.262199 -7.296904) (end 2.162199 -7.521904) (angle -73.56696737) (layer B.SilkS) (width 0.15))
      (fp_arc (start -3.725 -7.2) (end -3.725 -6.025) (angle -90) (layer F.SilkS) (width 0.15))
      (fp_arc (start -0.7 -1.3) (end -0.7 -3.575) (angle -70) (layer F.SilkS) (width 0.15))
      (fp_arc (start -6.3 -5.025) (end -6.3 -6.025) (angle -90) (layer F.SilkS) (width 0.15))
      (fp_arc (start -6.3 -2.375) (end -6.3 -1.375) (angle 90) (layer F.SilkS) (width 0.15))
      (fp_arc (start -3.737801 -2.303096) (end -2.837801 -2.078096) (angle 73.56696737) (layer F.SilkS) (width 0.15))

      (pad "" np_thru_hole circle (at 5.22 4.2 ${p.rot}) (size 1 1) (drill 1) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.22 4.2 ${p.rot}) (size 1 1) (drill 1) (layers *.Cu *.Mask))
      (pad 2 smd rect (at 2.75 5.399 ${p.rot}) (size 1.7 1) (layers F.Cu F.Paste F.Mask) ${p.net.led_out.str})
      (pad 3 smd rect (at -2.75 5.399 ${p.rot}) (size 1.7 1) (layers F.Cu F.Paste F.Mask) ${p.net.GND.str})
      (pad 1 smd rect (at 2.75 3.999 ${p.rot}) (size 1.7 1) (layers F.Cu F.Paste F.Mask) ${p.net.VCC.str})
      (pad 4 smd rect (at -2.75 3.999 ${p.rot}) (size 1.7 1) (layers F.Cu F.Paste F.Mask) ${p.net.led_in.str})
      (pad 3 smd rect (at -2.75 3.999 ${p.rot}) (size 1.7 1) (layers B.Cu B.Paste B.Mask) ${p.net.GND.str})
      (pad 2 smd rect (at 2.75 3.999 ${p.rot}) (size 1.7 1) (layers B.Cu B.Paste B.Mask) ${p.net.led_out.str})
      (pad 4 smd rect (at -2.75 5.399 ${p.rot}) (size 1.7 1) (layers B.Cu B.Paste B.Mask) ${p.net.led_in.str})
      (pad 1 smd rect (at 2.75 5.399 ${p.rot}) (size 1.7 1) (layers B.Cu B.Paste B.Mask) ${p.net.VCC.str})
    `

    return `
      (module Choc_Hotswap_SK6812MiniE (layer F.Cu) (tedit 610F112B)
        ${p.at}

        (fp_text reference SW4 (at 6.85 7.62 ${p.rot - 180}) (layer F.SilkS) hide
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text value SW_PUSH (at -4.95 7.62 ${p.rot - 180}) (layer F.Fab) hide
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (pad "" np_thru_hole circle (at -5.5 0 ${p.rot + 270}) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 5.5 0 ${p.rot + 270}) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 0 0 ${p.rot + 270}) (size 3.4 3.4) (drill 3.4) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 0 -5.9 ${p.rot + 270}) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 5 -3.7 ${p.rot + 270}) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad 5 smd rect (at -2.8 -5.9 ${p.rot}) (size 1.6 2.2) (layers B.Cu B.Paste B.Mask) ${p.net.key_in.str})
        (pad 6 smd rect (at 7.8 -3.7 ${p.rot}) (size 1.6 2.2) (layers B.Cu B.Paste B.Mask) (clearance 0.3) ${p.net.key_out.str})
        (pad 6 smd rect (at -7.9 -3.7 ${p.rot}) (size 1.6 2.2) (layers F.Cu F.Paste F.Mask) (clearance 0.5) ${p.net.key_out.str})
        (pad 5 smd rect (at 2.8 -5.9 ${p.rot}) (size 1.6 2.2) (layers F.Cu F.Paste F.Mask) ${p.net.key_in.str})
        (pad "" np_thru_hole circle (at -5 -3.7 ${p.rot + 90}) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        ${p.param.led ? led : ""}
      )
      `;
    }
}
