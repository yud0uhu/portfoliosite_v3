use strict;
use utf8;
use Encode;
use Net::Twitter::Lite::WithAPIv1_1;
use YAML::Tiny;

my $data = YAML::Tiny->new;
$data = YAML::Tiny->read('./secret_key.yml');
my $key = $data->[0];

my $nt = Net::Twitter::Lite::WithAPIv1_1->new(
  consumer_key        => $key->{'consumer_key'},
  consumer_secret     => $key->{'consumer_secret'},
  access_token        => $key->{'access_token'},
  access_token_secret => $key->{'access_token_secret'},
  ssl => 1,
);

my $result = $nt->update('我慢できなくなって、テスト前日だというのにperlからtwitterをしています');

print Dumper $result;