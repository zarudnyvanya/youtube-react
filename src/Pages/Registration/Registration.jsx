import { Form } from '../../components/Form/Form'
import s from './Registration.module.scss'

export const Registration = () => {
  return (
    <div className="main_registration">
      <div className={s.registration}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <div className={s.header}>
              <div className="logo">
                <svg
                  width="90"
                  height="20"
                  viewBox="0 0 90 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2_88)">
                    <path
                      d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 1.78814e-07 14.285 0 14.285 0C14.285 0 5.35042 1.78814e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C1.78814e-07 5.35042 0 10 0 10C0 10 1.78814e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                      fill="#FF0000"
                    />
                    <path
                      d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                      fill="white"
                    />
                    <path
                      d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"
                      fill="black"
                    />
                    <path
                      d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"
                      fill="black"
                    />
                    <path
                      d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"
                      fill="black"
                    />
                    <path
                      d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"
                      fill="black"
                    />
                    <path
                      d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"
                      fill="black"
                    />
                    <path
                      d="M80.6091 8.0387C80.4374 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8758 5.79035 78.2079 5.79035C77.6905 5.79035 77.206 5.93616 76.7568 6.23014C76.3076 6.52412 75.9595 6.90747 75.7149 7.38489H75.6938V0.785645H72.9774V18.5608H75.3057L75.5926 17.3755H75.6538C75.8725 17.7988 76.1994 18.1304 76.6345 18.3774C77.0696 18.622 77.5541 18.7443 78.0856 18.7443C79.0381 18.7443 79.7413 18.3045 80.1905 17.4272C80.6397 16.5476 80.8654 15.1765 80.8654 13.3092V11.3266C80.8654 9.92722 80.7784 8.82892 80.6091 8.0387ZM78.0244 13.1492C78.0244 14.0617 77.9868 14.7767 77.9115 15.2941C77.8363 15.8115 77.7116 16.1808 77.5329 16.3971C77.3565 16.6158 77.1166 16.724 76.8179 16.724C76.5851 16.724 76.3711 16.6699 76.1735 16.5594C75.976 16.4512 75.8161 16.2866 75.6938 16.0702V8.96062C75.7878 8.6196 75.9525 8.34209 76.1853 8.12337C76.4158 7.90465 76.6698 7.79646 76.9402 7.79646C77.2272 7.79646 77.4482 7.90935 77.6035 8.13278C77.761 8.35855 77.8692 8.73485 77.9304 9.26636C77.9915 9.79787 78.0221 10.5528 78.0221 11.5335V13.1492H78.0244Z"
                      fill="black"
                    />
                    <path
                      d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_88">
                      <rect width="90" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h1 className={s.main_title}>Создайте </h1>
              <h2 className={s.second_title}>Перейдите на </h2>
            </div>

            <div className={s.users_block}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
