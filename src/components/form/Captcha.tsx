import React, { useEffect, useState } from 'react'
import Column from '../grid/Column'
import Image from '../image/Image'
import Row from '../grid/Row'
import Button from '../button/Button'
import Input from './Input'
import axios from 'axios'

function Captcha() {
  const [captchaImage, setCaptchaImage] = useState('/img/captcha/background.png');

  const refreshCaptchaImage = async () => {
    const imageBinary = await axios.post('/captcha', undefined, { responseType: 'arraybuffer' });
    const imageBase64 = Buffer.from(imageBinary.data, 'binary').toString('base64');

    setCaptchaImage(`data:image/png;base64,${imageBase64}`);
  }

  useEffect(() => {
    refreshCaptchaImage();
  }, [])

  return (
    <Column className="gap-[10px]">
      <Row className="gap-[30px]">
        <Column className="gap-[12px]" weight={1}>
          <Image src={captchaImage} height={50}/>
        </Column>

        <Button color={'primary'} onClick={refreshCaptchaImage}>
          <Image src="/img/icon/refresh.svg" width={16} height={16}/>
        </Button>
      </Row>

      <Input name="captcha" type="text" placeholder="Masukan captcha" required/>
    </Column>
  )
}

export default Captcha