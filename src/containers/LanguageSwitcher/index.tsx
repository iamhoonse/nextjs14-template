import { useTranslation } from "@/app/i18n";
import { type ComponentProps, type FC } from "react";
import LanguageSwitchPanel from "@/components/atoms/LanguageSwitchPanel";

/**
 * Index 컨테이너 props 목록 정의
 */
interface LanguageSwitcherProps {
  /**
   * 현재 사용 중인 언어
   */
  lng: ComponentProps<typeof LanguageSwitchPanel>["lng"];
  /**
   * 현재 위치한 페이지의 pathname
   */
  currentPathName: ComponentProps<
    typeof LanguageSwitchPanel
  >["currentPathName"];
}

/**
 * (서버 컴포넌트) 현재 표시 중인 언어 설정을 변경합니다.
 * @param lng - 현재 사용 중인 언어
 * @param currentPathName - 현재 위치한 페이지의 pathname
 */
const LanguageSwitcher: FC<LanguageSwitcherProps> = async ({
  lng,
  currentPathName,
}) => {
  /*
    i18next 인스턴스를 초기화 및 생성하고, 설정 구성 및 인스턴스 참조를 가져옵니다.
   */
  const { t } = await useTranslation(lng, "language-switcher");
  /*
    컨테이너 구조
   */
  return (
    <LanguageSwitchPanel t={t} lng={lng} currentPathName={currentPathName} />
  );
};
export default LanguageSwitcher;
