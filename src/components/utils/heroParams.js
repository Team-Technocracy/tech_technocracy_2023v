export const doodleData = `
    --cycle: @r(50s, 25s, .1);
    :doodle {
        @grid: 1x10 / 100%;
    }
    @place-cell: center;
    @size: calc(@i() * 10%);

    border-radius: 50%;
    border-style: dashed;
    border-width: calc(@i() * 4px);
    border-color: hsla(
        calc(20 * @i()), 70%, 68%,
        calc(3 / @i() * .8)
    );
    transform: rotate(@r(360deg));
    animation: rotation var(--cycle) linear infinite;

    @keyframes rotation {
        0 { transform: rotate(0deg); }
        50% {
            transform: rotate(359deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
`;

export const particleParams = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 1,
      direction: "top",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: false,
        mode: "repulse",
      },
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 0,
        opacity: 0,
      },
      repulse: {
        distance: 400,
        duration: 4,
      },
    },
  },
};
