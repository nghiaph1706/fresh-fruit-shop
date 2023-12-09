import Seo from '@/components/seo/seo';
import { useTranslation } from 'next-i18next';
import { getStaticProps } from '@/framework/faq-ssr';
export { getStaticProps };
import { getLayoutWithFooter } from '@/components/layouts/layout-with-footer';
import PageBanner from '@/components/banners/page-banner';

export default function BlogPage() {
  const { t } = useTranslation();
  const bestPosts = [
    {
      id: 1,
      title: 'Lợi ích của việc ăn trái cây hàng ngày',
      category: 'SỨC KHỎE',
      description:
        'Việc ăn trái cây đều đặn có thể cung cấp nhiều dưỡng chất cần thiết cho cơ thể, giúp tăng cường hệ miễn dịch, giảm nguy cơ mắc các bệnh lý và cải thiện sức khỏe nói chung.',
      imageUrl:
        'https://personaltouchfitness.co.uk/wp-content/uploads/2018/06/Fruit-Bowl.jpg',
    },
  ];
  const posts = [
    {
      id: 1,
      title: 'Trái cây sạch và ảnh hưởng tích cực đối với môi trường',
      category: 'SỨC KHỎE',
      description:
        'Việc ủng hộ và tiêu dùng trái cây sạch không chỉ tốt cho sức khỏe cá nhân mà còn góp phần bảo vệ môi trường thông qua các phương pháp canh tác bền vững.',
      imageUrl:
        'https://content.health.harvard.edu/wp-content/uploads/2023/04/b599a20a-a453-425a-9d2f-fa2ff8ba2776.jpg',
    },
    {
      id: 2,
      title: '10 loại trái cây giàu chất chống oxy hóa',
      category: 'SỨC KHỎE',
      description:
        'Trái cây như việt quất, dâu tây, cam, và dứa chứa nhiều chất chống oxy hóa, giúp ngăn ngừa sự lão hóa, bảo vệ cơ thể khỏi tổn thương của các gốc tự do.',
      imageUrl:
        'https://www.healthkart.com/connect/wp-content/uploads/2015/07/banner-2021-04-09T155419.271.jpg',
    },
    {
      id: 3,
      title: 'Cách chọn và bảo quản trái cây tươi ngon',
      category: 'SỨC KHỎE',
      description:
        'Một số mẹo nhỏ giúp bạn lựa chọn và bảo quản trái cây sao cho tốt nhất, từ cách chọn mua đến cách bảo quản để giữ được hương vị và dưỡng chất.',
      imageUrl:
        'https://bosque.agrilife.org/files/2013/06/bigstock-Heart-of-fruits-and-vegetables-184383741.jpg',
    },
    {
      id: 4,
      title: 'Tác động tích cực của việc ăn trái cây đối với da',
      category: 'SỨC KHỎE',
      description:
        'Các loại vitamin và dưỡng chất có trong trái cây có thể cải thiện độ đàn hồi của da, làm giảm nếp nhăn và giữ cho làn da trở nên khỏe mạnh và tươi trẻ hơn.',
      imageUrl:
        'https://sepcotrading.com/wp-content/uploads/2021/09/Kiwi-fruit-benefits-for-hair-growthsepcotrading.com_.jpg',
    },
    {
      id: 5,
      title: 'Phương pháp làm mát bằng trái cây vào mùa hè',
      category: 'SỨC KHỎE',
      description:
        'Một số công thức đơn giản để tận hưởng trái cây mát lạnh trong mùa hè nóng bức, từ sinh tố đến sorbet và các loại thức uống giải khát.',
      imageUrl:
        'https://www.adityabirlacapital.com/healthinsurance/active-together/wp-content/uploads/2020/12/Apples-1.jpg',
    },
    {
      id: 6,
      title: 'Trái cây và vai trò quan trọng của chúng trong dinh dưỡng',
      category: 'SỨC KHỎE',
      description:
        'Sự đa dạng của các loại trái cây đem lại lợi ích lớn cho dinh dưỡng, cung cấp nhiều loại vitamin và khoáng chất cần thiết cho cơ thể.',
      imageUrl:
        'https://www.dimini.org/wp-content/uploads/2020/05/strawberries-3974658_960_720.jpg',
    },
  ];

  return (
    <>
      <Seo title="Help" url="help" />
      <section className="mx-auto w-full max-w-1920 bg-light pb-16 lg:pb-10 xl:pb-14">
        <PageBanner
          title={t('text-blog-title')}
          breadcrumbTitle={t('text-home')}
        />
        <div className="flex items-center justify-center">
          <div className="row">
            <div className="container pt-3">
              <div className="row">
                {bestPosts.map((post) => (
                  <article className="best-post" key={post.id}>
                    <div
                      className="best-post-image"
                      style={{ backgroundImage: `url("${post.imageUrl}")` }}
                    ></div>
                    <div className="best-post-content">
                      <div className="best-post-content-cat bg-accent">
                        {post.category}
                      </div>
                      <div className="best-post-content-title">
                        {post.title}
                      </div>
                      <div className="best-post-content-sub">
                        {post.description}
                      </div>
                    </div>
                  </article>
                ))}
                {posts.map((post) => (
                  <article className="post__card-2" key={post.id}>
                    <div
                      className="post__card__image-2"
                      style={{ backgroundImage: `url("${post.imageUrl}")` }}
                    ></div>
                    <div className="post__card_meta-2">
                      <div className="post__card_cat bg-accent">
                        {post.category}
                      </div>
                      <div className="post__card_title-2">{post.title}</div>
                      <div className="post__card_alttitle-2">
                        {post.description}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

BlogPage.getLayout = getLayoutWithFooter;
