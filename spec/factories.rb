FactoryBot.define do
  factory :hypothesis do
    hypothesis "MyString"
    type 1
    validity 1
    problem nil
  end
  factory :problem_project do
    problem nil
    project nil
    type 1
  end
  factory :problem do
    name "MyString"
    description "MyString"
  end
  factory :project do
    user nil
    name "MyString"
    description "MyText"
    website ""
    start_date "2018-04-30"
  end
  factory :event do
    name "MyString"
    date "2018-04-15"
    tickets_url "MyString"
    livestream_url "MyString"
    country "MyString"
    city "MyString"
    venue "MyString"
    description "MyString"
    agenda "MyString"
    speakers "MyString"
  end
  factory :user do
    name "Joe"
    email "joe@voyager.com"
    password "blah_blah1"
  end
end